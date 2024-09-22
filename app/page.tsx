"use client";

import NavBar from "@/components/NavBar";
import { useState } from "react";
import { Car, Bike, BusFront } from "lucide-react";
import { useRecoilState } from "recoil";
import { TcoData, visible } from "@/store/atom";
import TcoCalcultor from "@/components/tcoCalculator";
import Tables from "@/components/Tables";
import IceDetails from "@/components/IceDetails";
import EvDetails from "@/components/EvDetails";
import TcoDetails from "@/components/TcoDetails";
import Graphs from "@/components/graphs";
import Savings from "@/components/Savings";
import Footer from "@/components/Footer";
import html2pdf from "html2pdf.js";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [tcoData, setTcoData] = useRecoilState(TcoData);
  const [visibled, setVisible] = useRecoilState(visible);
  const [isSavingsVisible, setSavingsVisible] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await TcoCalcultor(tcoData);

    await setTcoData({
      ...tcoData,
      iceTco: res.iceTco,
      evTco: res.evTco,
      savings: res.difference,
      fuelCostperKm: res.fuelCostperKm,
      chargeCostperKm: res.chargeCostperKm,
    });

    setVisible(true);
  };

  const downloadPdf = () => {
    const invoice = document.getElementById("invoice");
    console.log(invoice);
    if (invoice) {
      invoice.style.color = "black";
    }

    var opt = {
      margin: 0.5,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(invoice).set(opt).save();
  };

  return (
    <div className="bg-white text-black  min-h-screen">
      <NavBar />
      <div className="">
        <div className="container mx-auto mt-6">
          <h1 className="text-3xl font-bold text-teal-500 mb-4 px-4">
            TCO Calculator
          </h1>

          <div className="flex mb-4 border rounded-lg overflow-hidden mx-2">
            <button
              className={`flex-1 p-2 text-sm ${
                isPrivate ? "bg-teal-500 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setIsPrivate(true)}
            >
              Private (Self-Owned)
            </button>
            <button
              className={`flex-1 p-2 text-sm ${
                !isPrivate ? "bg-teal-500 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setIsPrivate(false)}
            >
              Commercial (Public Use)
            </button>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            {isPrivate ? (
              <>
                <div className="p-4 border rounded-lg shadow-md">
                  <Car className="w-8 h-8 text-teal-500" />
                </div>
                <div className="p-4 border rounded-lg shadow-md">
                  <Bike className="w-8 h-8" />
                </div>
              </>
            ) : (
              <div className="p-4 border rounded-lg shadow-md">
                <BusFront className="w-8 h-8 text-teal-500" />
              </div>
            )}
          </div>

          {/* TCO details */}

          <form onSubmit={(e) => handleSubmit(e)}>
            <TcoDetails />
            <IceDetails />
            <EvDetails />
          </form>

          {visibled && (
            <div className=" ">
              <div className="bg-teal-500 text-white py-2 px-4 mt-6 flex justify-between">
                <div>Comparison</div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => setSavingsVisible(!isSavingsVisible)}
                  />
                  <div className="relative w-11 h-6 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-black"></div>
                  <span className="ms-3  font-semibold text-white ">
                    Savings
                  </span>
                </label>
              </div>
              <div id="invoice" className="">
                <Tables />
                {isSavingsVisible && <Savings amount={tcoData.savings || 0} />}

                <div className="bg-teal-500 text-white py-2 px-4">
                  Total Cost of Ownership (TCO) Comparison for ICE and EV
                </div>
                <div>
                  <Graphs />
                </div>
              </div>
              <div className="pl-4">
                <Button className="my-4 " onClick={downloadPdf}>
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
