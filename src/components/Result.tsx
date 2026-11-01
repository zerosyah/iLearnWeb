import { useState } from "react";
import {
  studentSearchStart,
  studentSearchSuccess,
  studentSearchFailure,
} from "../redux/marks/markSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { FiBookOpen, FiUser } from "react-icons/fi";
import { FaCheck, FaSearch } from "react-icons/fa";
import { PiGraduationCapLight } from "react-icons/pi";
import { FaArrowRightLong, FaRepeat } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";

export default function Result() {
  type RootType = ReturnType<typeof store.getState>;
  const [formData, setFormData] = useState({
    StudentSubject: "",
    StudentId: "",
    Grade: "",
  });
  const [submitForm, setSubmitForm] = useState({
    Subject: "",
    Month: "",
    TestName: "",
    Mark: "",
    Total: "",
    Status: "",
  });
  const [disabledFirstForm, setDisabledFirstFrom] = useState<boolean>(false);
  const handleAddMark = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    return setSubmitForm({ ...submitForm, [target.id]: target.value });
  };
  console.log("form Mark: ", submitForm);

  const [display, setDisplay] = useState(false);
  const [found, setFound] = useState<boolean>(false);
  const [, setStudent] = useState([]);
  const dispatch = useDispatch();
  const { error, searching, student } = useSelector(
    (state: RootType) => state.mark,
  );
  const currentUser = useSelector((state: RootType) => state.user.currentUser);
  //console.log("current Data: ", currentUser);

  // handle first search form data.
  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.id]: target.value });
  };

  // Grade options.
  const gradeOptions = [
    { value: "8", label: "Grade 8" },
    { value: "9", label: "Grade 9" },
    { value: "10", label: "Grade 10" },
    { value: "11", label: "Grade 11" },
    { value: "12", label: "Grade 12" },
  ];

  // Status lists
  const status = ["Passed", "Failed", "Panding"];

  //const currentStudent = useSelector((state:any)=>{state.st.currentStudent})
  console.log("formData: ", formData);

  const months = ["January", "February", "March", "April"];

  // const handleSearch = () => {
  //   if (
  //     formData.Grade == "" ||
  //     formData.StudentId == "" ||
  //     formData.StudentSubject == ""
  //   ) {
  //     return setFound(() => false);
  //   }
  //   return (setFound(() => true), setDisabledFirstFrom(() => true));
  // };

  // reset learner.
  const resetButton = () => {
    setFormData({
      StudentSubject: "",
      StudentId: "",
      Grade: "",
    });
    setDisabledFirstFrom(false);

    setDisplay(false);

    return setFound(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://mark.ilearn.club/data/student/marks/:${(currentUser as { _id?: string } | null)?._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();
      if (res.ok) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to check if student participate on the subject.
  const searchStudent = async () => {
    dispatch(studentSearchStart());

    try {
      const res = await fetch(
        `https://mark.ilearn.club/data/student/marks/${formData.StudentId}/${formData.Grade}/${formData.StudentSubject}`,
        { credentials: "include" },
      );
      const data = await res.json();

      if (!res.ok || data.success === false) {
        dispatch(studentSearchFailure(data));
        setDisplay(false);
        setFound(false);
        return;
      }

      dispatch(studentSearchSuccess(data));
      setFound(true);
      setDisabledFirstFrom(true);
      setStudent(data.message);
      setDisplay(true);
    } catch (error) {
      dispatch(studentSearchFailure(error));
      setDisplay(false);
      setFound(false);
    }
  };
  const subjects = [
    { label: "Mathematics", value: "Mathematics" },
    { label: "English", value: "English" },
    { label: "IsiZulu", value: "IsiZulu " },
    { label: "Life Orientation", value: "LifeOrientation" },
    { label: "Creative Art", value: "CreativeArt" },
    { label: "Technology", value: "Technology" },
    { label: "Natural Science", value: "NaturalScience" },
    { label: "Geography", value: "Geography" },
    { label: "Drama", value: "Drama" },
    { label: "History", value: "History" },
    { label: "Life Sciences", value: "LifeSciences" },
    { label: "Physical Sciences", value: "PhysicalSciences" },
    { label: "Mathematics Literacy", value: "MathematicsLiteracy" },
    { label: "Tourism", value: "Tourism" },
    { label: "Accounting", value: "Accounting" },
    { label: "Consumer Studies", value: "ConsumerStudies" },
    { label: "Business Studies", value: "BusinessStudies" },
  ];
  console.log("searching: ", student);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="card rounded-[6px] !border-none">
        <h3 className="mb-2 font-popins text-[11px] font-semibold uppercase leading-none text-hoverGold">
          Ilearn / Results
        </h3>
        <h1 className="font-bebasNeue text-[36px] leading-10 text-nightGreen md:text-[48px]">
          Add Results
        </h1>
        <div className="flex items-center justify-between">
          <h2 className="mt-2 text-[14px] font-medium text-textGray">
            Enter Learner's ID, Grade and Subject that correspond your subject.
          </h2>
          {!searching && !display && !found && (
            <p className="cursor-pointer rounded-[6px] border border-borderGray !bg-default px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite">
              Preview · Not connected to learner records
            </p>
          )}

          {error && !found && !display && !student && (
            <p className="cursor-pointer rounded-[6px] border border-borderGray !bg-default px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite">
              Preview · error on learner records
            </p>
          )}

          {searching && (
            <p className="cursor-pointer rounded-[6px] border border-borderGray !bg-default px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite">
              Preview · Searching learner records
            </p>
          )}

          {!searching && student && display && found && (
            <p className="cursor-pointer rounded-[6px] border border-borderGray !bg-default px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite">
              Preview · connected to learner records
            </p>
          )}
        </div>
      </div>

      <div className="w-full rounded-[6px] border border-borderGray bg-default p-[20px] md:p-[26px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-[16px]">
            <div className="flex size-[40px] items-center justify-center rounded-[6px] border bg-nightGreen text-hoverGold">
              <FiUser size={20} className="" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-popins text-[10px] font-semibold uppercase leading-none text-gold">
                step 01
              </h3>
              <h3 className="mt-2 font-bebasNeue text-[24px] leading-none">
                Select Learner
              </h3>
            </div>
          </div>
          {formData.Grade != "" &&
            formData.StudentId != "" &&
            formData.StudentSubject != "" && (
              <FaCheck size={15} className="text-green-600" />
            )}
        </div>

        {/** search form  */}
        <div className="mt-6 flex w-full justify-between">
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
              Student ID
            </h2>
            <input
              type="text"
              id="StudentId"
              className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
              placeholder={`0710235676089`}
              value={formData.StudentId}
              onChange={handleChange}
              disabled={disabledFirstForm}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
              Select Grade
            </h2>
            <select
              //type="text"
              id="Grade"
              className="h-[40px] min-w-full rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold md:min-w-[240px]"
              //placeholder={`0710235676089`}
              onChange={handleChange}
              onSelect={handleChange}
              value={formData.Grade}
              disabled={disabledFirstForm}
            >
              {gradeOptions.map((grade, index) => (
                <option key={index} value={grade.value}>
                  {grade.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
              Select Subject
            </h2>
            <select
              id="StudentSubject"
              className="h-[40px] min-w-full rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold md:min-w-[240px]"
              value={formData.StudentSubject}
              onChange={handleChange}
              disabled={disabledFirstForm}
            >
              {subjects.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <button
            className="mt-[22px] flex h-[40px] items-center gap-[10px] rounded-[6px] border bg-gold px-[20px] font-popins text-[14px] text-strongNightGreen"
            onClick={searchStudent}
            disabled={disabledFirstForm}
          >
            <FaSearch size={15} />{" "}
            <p className="leading-none">Search Student</p>
          </button>
        </div>
      </div>

      {/** Add User data form */}
      {found && (
        <div className="mt-6 flex w-full items-center justify-between border-l-4 border-gold bg-nightGreen px-[28px] py-[20px] ">
          <div className="">
            <h3 className="font-popins text-[10px] font-semibold uppercase leading-none text-softWhite">
              selected learner id
            </h3>
            <h1 className="mt-2 font-bebasNeue text-[30px] leading-none text-gold">
              {formData?.StudentId}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-2 text-softWhite">
                <PiGraduationCapLight size={16} />
                <p className="font-popins text-[14px]">
                  Grade {formData.Grade}
                </p>
              </div>
              <div className="flex items-center gap-2 text-softWhite">
                <FiBookOpen size={16} />
                <p className="font-popins text-[14px]">
                  {formData.StudentSubject}
                </p>
              </div>
            </div>
          </div>
          <button
            className="flex items-center gap-2 font-popins text-[14px]
           font-medium text-softWhite"
            onClick={resetButton}
          >
            <FaRepeat size={16} />
            <p className="">Change Learner</p>
          </button>
        </div>
      )}

      {found && (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-[16px]">
              <div className="flex size-[40px] items-center justify-center rounded-[6px] border bg-nightGreen text-gold">
                <MdOutlineAdd size={20} className="" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-popins text-[10px] font-semibold uppercase leading-none text-gold">
                  step 02
                </h3>
                <h3 className="mt-2 font-bebasNeue text-[24px] leading-none">
                  Add assessment marks
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-10">
            <div className="flex w-full flex-col gap-[6px]">
              <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                Subject
              </h2>
              <input
                type="text"
                id="Subject"
                className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                //placeholder={`0710235676089`}
                value={formData.StudentSubject}
                disabled
              />
            </div>
            <div className="flex w-full flex-col gap-[6px]">
              <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                Select Month
              </h2>
              <select
                //type="text"
                id="Month"
                className="h-[40px] min-w-full rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold md:min-w-[240px]"
                //placeholder={`0710235676089`}
                onChange={handleAddMark}
                onSelect={handleAddMark}
                //value={submitForm.Mark}
              >
                {months.map((grade, index) => (
                  <option key={index} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-full flex-col gap-[6px]">
              <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                Test Name
              </h2>
              <input
                type="text"
                id="TestName"
                className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                placeholder={`Test name here`}
                onChange={handleAddMark}
              />
            </div>
          </div>
          <div className="mt-5 flex w-full justify-between gap-10">
            <div className="flex w-full flex-col gap-[6px]">
              <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                Test Mark
              </h2>
              <input
                type="number"
                id="TestMark"
                className="h-[40px] min-w-full rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                //placeholder={`0710235676089`}
                onChange={handleAddMark}
              />
            </div>
            <div className="flex w-full flex-col gap-[6px]">
              <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                Select Status
              </h2>
              <select
                //type="text"
                id="Status"
                className="h-[40px] min-w-full rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold md:min-w-[240px]"
                //placeholder={`0710235676089`}
                onChange={handleAddMark}
                onSelect={handleAddMark}
                // value={submitForm.Status}
              >
                {status.map((grade, index) => (
                  <option key={index} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
            <button className="mt-[22px] flex h-[40px] w-full items-center justify-center gap-[10px] whitespace-nowrap rounded-[6px] border bg-gold px-[20px] text-center font-popins text-[14px] text-strongNightGreen">
              <MdOutlineAdd size={17} />{" "}
              <p className="leading-none">Search Student</p>
              <FaArrowRightLong size={16} />
            </button>
          </div>
        </div>
      )}

      <hr className="mt-6" />
    </form>
  );
}

/**
 * <form onSubmit={handleSubmit}>
        <div className="mb-4 text-center text-lg font-bold underline">
          <h1>Student Result</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <div className="std-id flex flex-col gap-[20px]">
            <TextField
              id="studentId"
              label="Student ID"
              variant="outlined"
              onChange={handleChange}
              size="small"
              type="text"
              //required={true}
            />
            <Autocomplete
              value={formData.Grade}
              onChange={(event: React.FormEvent, value: object) => {
                event.preventDefault();
                setFormData({ ...formData, Grade: value.value });
              }}
              id="sudentGrade"
              size="small"
              options={gradeOptions}
              //sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Grade" />}
            />
            <Autocomplete
              value={formData.studentSubject}
              onChange={(event: any, value: object) => {
                event.preventDefault();
                //@ts-ignore
                setFormData({ ...formData, studentSubject: value.value });
              }}
              id="studentSubject"
              options={subjects}
              size="small"
              //sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Subject" />
              )}
            />
          </div>
          <div className="flex h-fit w-56 items-center justify-center border border-dashed p-1">
            {!searching && formData.studentId.length < 0 && (
              <p className="">Results will Show here!</p>
            )}
            {searching && <p className="">Loading please wait...</p>}
            {!searching && error && student == null && (
              <p className="">Student Not Found.</p>
            )}
            {!searching && student !== null && (
              <p className="space-x-[10px] font-popins font-medium text-lime-600">
                {student.message}
              </p>
            )}
          </div>
          {display && (
            <div className="flex flex-col gap-3 border border-dotted p-3 md:flex-row md:items-center md:justify-evenly">
              <div className="flex items-center gap-1">
                <Autocomplete
                  value={formData.Subject}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setFormData({ ...formData, Subject: value.value });
                  }}
                  id="Subject"
                  options={subjects}
                  size="small"
                  sx={{ width: 180 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Subject" required={true} />
                  )}
                />
              </div>
              <div className="flex items-center gap-1">
                <Autocomplete
                  value={submitForm.Month}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setSubmitForm({ ...submitForm, Month: value });
                  }}
                  id="Month"
                  options={months}
                  size="small"
                  sx={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Month" required={true} />
                  )}
                />
              </div>
              <div className="flex items-center gap-1">
                <TextField
                  id="TestName"
                  label="TestName"
                  variant="outlined"
                  onChange={handleChange}
                  size="small"
                  type="text"
                  required={true}
                  //focused=""
                />
              </div>
            </div>
          )}
          {display && (
            <div className="flex flex-col gap-4 border p-3 md:flex-row md:justify-evenly">
              <div className="flex items-center gap-1">
                <TextField
                  id="Mark"
                  label="Mark"
                  variant="outlined"
                  onChange={handleChange}
                  type="number"
                  required={true}
                  size="small"
                />
              </div>
              <div className="flex items-center gap-1">
                <Autocomplete
                  value={submitForm.Status}
                  onChange={(event: any, value: object) => {
                    event.preventDefault();
                    //@ts-ignore
                    setSubmitForm({ ...submitForm, Status: value });
                  }}
                  id="Status"
                  options={["Pass", "Fail"]}
                  size="small"
                  sx={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Status" required={true} />
                  )}
                />
              </div>
            </div>
          )}
          {!display && (
            <Button
              className="uppercase"
              gradientDuoTone={"tealToLime"}
              type="submit"
            >
              Add Result
            </Button>
          )}
        </div>
      </form>
 */
