import React, {useContext} from "react";
import { Cancel, Check } from "../components/icons";
import { globalContext } from "../Contexts/globalContext";

export default function PriceTableHeader({priceTableData}) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container price-table`}>
      <table className="w-full text-center">
        <thead>
          <tr>
            <td></td>
            <td>
              <span>برای شروع</span>
              <h2>رایگان</h2>
            </td>
            <td>
              <span>پایه</span>
              <h2>
                <span>ماهانه</span> 189,000 <span>تومان</span>
              </h2>
            </td>
            <td>
              <span>طلایی</span>
              <h2>
                <span>ماهانه</span> 289,000 <span>تومان</span>
              </h2>
            </td>
          </tr>
        </thead>
        <tbody className="my-20 text-sm font-medium">
          {priceTableData.map((data) => (
            <tr key={data.id} className="[&:nth-child(odd)]:bg-gray-200 hover:bg-gray-200 h-12">
              <td>{data.title}</td>
              <td>{data.free ? <Check size={18} /> : <Cancel size={18} />}</td>
              <td>
                {data.base ? <Check size={18} /> : <Cancel size={18} />}
              </td>
              <td>
                {data.golden ? <Check size={18} /> : <Cancel size={18} />}
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            {[...Array(3)].map((btn, index) => (
              <td key={index}>
                <button className="mt-5 mb-10 bg-blue-500 text-white py-2 px-5 rounded-md">
                  شروع آزمایشی
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
