import { useDispatch, useSelector } from "react-redux";
import DashSearchList from "./DashSearchList";
import DashUserDetails from "./DashUserDetails";
import { store } from "../redux/store";
import { resetSelection } from "../redux/student/studentSlice";

type RootProps = ReturnType<typeof store.getState>;

export default function DashUser() {
  const { studentData } = useSelector((state: RootProps) => state.student);
  const dispatch = useDispatch();

  const handleReset = () => {
    //console.log("before: ", studentData);
    return dispatch(resetSelection());
    //console.log("after: ", studentData);
  };

  return (
    <div className="scroll-container h-screen w-full overflow-y-scroll">
      <div className="card rounded-[6px] !border-none">
        <h3 className="mb-2 font-popins text-[11px] font-semibold uppercase leading-none text-hoverGold">
          Ilearn / Results
        </h3>
        <h1 className="font-bebasNeue text-[36px] leading-10 text-nightGreen md:text-[48px]">
          Find Students
        </h1>
        <div className="flex items-center justify-between">
          <h2 className="mt-2 text-[14px] font-medium text-textGray">
            Find a learner and review their details and results
          </h2>
          {
            <p
              onClick={handleReset}
              className="cursor-pointer rounded-[6px] border border-borderGray !bg-default px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite"
            >
              Reset User
            </p>
          }
        </div>
      </div>
      <div className="flex gap-6">
        <DashSearchList />
        {studentData && <DashUserDetails selectedUser={studentData} />}
      </div>
    </div>
  );
}
