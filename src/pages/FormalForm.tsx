import React, {useState } from "react";
import {
  Datepicker,
  Button,
  Select,
} from "flowbite-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormTextInput from "../components/FormTextInput";
import MultiTextInput from "../components/MultiTextInput";
import MuiSelect from "../components/MuiSelect";

export default function FormalForm() {
  const { currentUser } = useSelector((state: any) => state.user);
  const [formData, setFormData] = useState({
    GradeAppliedFor: "",
    BirthDate: new Date(),
    IsRepeating: false,
    HasMedicalConditions: false,
    HasAllergies: false,
    HasDisabilities: false,
    HasSpecialNeeds: false,
    HasMedicalAid: false,
    _id: currentUser.ID,
    FirstName: currentUser.FirstName,
    LastName: currentUser.LastName,
    Email: currentUser.Email,
    Phone: currentUser.Phone,
    IdNumber: currentUser.IdNumber,
    Gender: "",
    Race: "",
  });

 // const [selectedDate, setSelectedDate] = useState("");
  // @ts-ignore
  const [error, setError] = useState(false);
  // @ts-ignore
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData(prevData => ({...prevData, [id]: value}));
  };

  //console.log(currentUser.ID);
  //console.log(selectedDate);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(
        `https://mark.ilearn.club/data/student/form`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(true);
        setErrorMessage(data.error);
        setMessage(data.message);
        return;
      } else {
        setLoading(false);
        setError(false);
        navigate("/dashboard?tab=dash");
        return;
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
      setErrorMessage(error as string);
      setMessage("An error occurred. Please try again later.");
      return;
    }
  };

  console.log(formData);
  
  //const [stream, setStream] = useState("");
  return (
    <main className="flex w-full flex-col gap-4 p-4">
      <form onSubmit={handleSubmit} className="form flex w-full flex-col gap-4 rounded-lg border-2 p-2">
        <div className="rounded-lg border-2 bg-gray-500/40 p-2 text-lg font-bold uppercase shadow-lg shadow-black">
          <h1>Student Information</h1>
        </div>
        <section className="mt-2 flex w-full flex-wrap gap-4 rounded-lg border p-2">
          <FormTextInput
            label="First Name"
            id="FirstName"
            handleChange={handleChange}
            disabled={true}
            value={currentUser.FirstName}
          />
          <FormTextInput
            label="Last Name"
            id="LastName"
            handleChange={handleChange}
            disabled={true}
            value={currentUser.LastName}
          />
          <FormTextInput label="Email" id="Email" handleChange={handleChange} disabled={true} value={currentUser.Email} />
          <FormTextInput
            label="Phone Number"
            id="PhoneNumber"
            handleChange={handleChange}
            disabled={true}
            value={currentUser.Phone}
          />
          <FormTextInput
            label="Id Number"
            id="IdNumber"
            handleChange={handleChange}
            disabled={true}
            value={currentUser.IdNumber}
          />
          <MuiSelect labelId="Gender" id="Gender" label="Gender" options={["Male", "Female"]} onChange={(data: any)=> setFormData({...formData, Gender: data.target.value})} />

          <MuiSelect labelId="Race" id="Race" label="Race" options={["White", "Black", "Coloured", "Indian", "Asian"]} onChange={(data: any)=> setFormData({...formData, Race: data.target.value})} />
          <Datepicker
            onSelectedDateChanged={(date) =>
              setFormData({ ...formData, BirthDate: date })
            }
            id="BirthDate"
          />
          <FormTextInput
            label="Country Of Origin"
            id="CountryOfOrigin"
            handleChange={handleChange}
            required={true}
            type={"text"}
          />
          <FormTextInput
            label="Nick Name"
            id="NickName"
            handleChange={handleChange}
            type={"text"}
          />
          <MultiTextInput
            label="Other Names"
            id="OtherNames"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Religion"
            id="Religion"
            handleChange={handleChange}
            type={"text"}
            required={true}
          />
          <FormTextInput
            label="Physical Address"
            id="PhysicalAddress"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Postal Address"
            id="PostalAddress"
            handleChange={handleChange}
          />
          <FormTextInput label="City" id="City" handleChange={handleChange} />
          <FormTextInput
            label="Home Number"
            id="HomeNumber"
            handleChange={handleChange}
            type={"number"}
            required={true}
          />
          <FormTextInput
            label="Emergency Contact"
            id="EmergencyNumber"
            handleChange={handleChange}
            type={"number"}
            required={true}
          />
        </section>
        <div className="rounded-lg border-2 bg-gray-500/40 p-2 text-lg font-bold uppercase shadow-lg shadow-black">
          <h1>Previous School Information</h1>
        </div>
        <section className="mt-2 flex w-full flex-wrap gap-4 rounded-lg border p-2">
          <FormTextInput
            label="School Name"
            id="PreviousSchoolName"
            handleChange={handleChange}
            required={true}
            type={"text"}
          />
          <FormTextInput
            label="School Address"
            id="PreviousSchoolAddress"
            handleChange={handleChange}
            type={"text"}
            required={true}
          />
          <FormTextInput
            label="School Principal"
            id="PreviousSchoolPrincipal"
            handleChange={handleChange}
            type={"text"}
            required={true}
          />
          <FormTextInput
            label="School Number"
            id="PreviousSchoolNumber"
            handleChange={handleChange}
            type={"number"}
            required={true}
          />
          <FormTextInput
            label="Removal Letter"
            id="PreviousSchoolRemovalLetter"
            handleChange={handleChange}
            type={"text"}
          />
          <FormTextInput
            label="School Country"
            id="PreviousSchoolCountry"
            handleChange={handleChange}
            type={"text"}
            required={true}
          />
        </section>
        <div className="rounded-lg border-2 bg-gray-500/40 p-2 text-lg font-bold uppercase shadow-lg shadow-black">
          <h1>Application Information</h1>
        </div>
        <section className="mt-2 flex w-full flex-wrap gap-4 rounded-lg border p-2">
          <Select onChange={handleChange} id="GradeAppliedFor">
            <option value={""}>Grade Applied for</option>
            <option value={"Grade 8"}>Grade 8</option>
            <option value={"Grade 9"}>Grade 9</option>
            <option value={"Grade 10"}>Grade 10</option>
          </Select>

          {formData.GradeAppliedFor === "Grade 10" && (
            <Select
              onChange={handleChange}
              id="CourseOfStudy"
              className="transition-opacity duration-700 ease-in-out"
            >
              <option value={""}>Course Of Study</option>
              <option value={"Commerce"}>Commerce</option>
              <option value={"Science"}>Science</option>
              <option value={"Drama"}>Drama</option>
            </Select>
          )}

          <FormTextInput
            label="Highest Grade Passed"
            id="HighestGradePassed"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Reason For Joining"
            id="ReasonForJoining"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Year Of Study"
            id="YearOfStudy"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Current Grade"
            id="CurrentGrade"
            handleChange={handleChange}
          />

          <Select
            onChange={(e: any) =>
              setFormData({
                ...formData,
                IsRepeating: e.target.value === "true" ? true : false,
              })
            }
            id="IsRepeating"
          >
            <option value={""}>Are You Repeating Grade</option>
            <option value={String(true)}>Yes</option>
            <option value={"false"}>No</option>
          </Select>

          <FormTextInput
            label="Course Of Study"
            id="CourseOfStudy"
            handleChange={handleChange}
            type={"text"}
            required={true}
          />
        </section>
        <div className="rounded-lg border-2 bg-gray-500/40 p-2 text-lg font-bold uppercase shadow-lg shadow-black">
          <h1>Student Medical Information</h1>
        </div>
        <section className="mt-2 flex w-full flex-wrap gap-4 rounded-lg border p-2">
          <Select
            onChange={(e: any) =>
              setFormData({
                ...formData,
                HasMedicalConditions: e.target.value === "true" ? true : false,
              })
            }
            id="HasMedicalConditions"
          >
            <option value={""}>Do you have Medical Conditions</option>
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </Select>

          {formData.HasMedicalConditions && (
            <MultiTextInput
              label="Medical Conditions"
              id="MedicalConditions"
              handleChange={handleChange}
            />
          )}

          <Select
            onChange={(e: any) =>
              setFormData({
                ...formData,
                HasAllergies: e.target.value === "true" ? true : false,
              })
            }
            id="HasAllergies"
          >
            <option value={""}>Do You Have Allergies</option>
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </Select>

          {formData.HasAllergies && (
            <MultiTextInput
              label="Allergies"
              id="Allergies"
              handleChange={handleChange}
            />
          )}

          <Select
            onChange={(e: any) =>
              setFormData({
                ...formData,
                HasDisabilities: e.target.value === "true" ? true : false,
              })
            }
            id="HasDisabilities"
          >
            <option value={""}>Do You Have Disabilities</option>
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </Select>

          {formData.HasDisabilities && (
            <MultiTextInput
              label="Disabilities"
              id="Disabilities"
              handleChange={handleChange}
            />
          )}

          <Select
            onChange={(e: any) =>
              setFormData({
                ...formData,
                HasSpecialNeeds: e.target.value === "true" ? true : false,
              })
            }
            id="HasSpecialNeeds"
          >
            <option value={""}>Do You have Special Needs</option>
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </Select>

          <Select
            onChange={(e: any) =>
              setFormData({
                ...formData,
                HasMedicalAid: e.target.value === "true" ? true : false,
              })
            }
            id="HasMedicalAid"
          >
            <option value={""}>Do You Have Medical Aid</option>
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </Select>

          <FormTextInput
            label="Medical Aid Nmber"
            id="MedicalAidNumber"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Parental Consent"
            id="ParentalConsent"
            handleChange={handleChange}
          />
        </section>

        <div className="rounded-lg border-2 bg-gray-500/40 p-2 text-lg font-bold uppercase shadow-lg shadow-black">
          <h1>Parents Medical Information</h1>
        </div>
        <section className="mt-2 flex w-full flex-wrap gap-4 rounded-lg border p-2">
          <FormTextInput
            label="First Name"
            id="ParentFirstName"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Last Name"
            id="ParentLastName"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Email"
            id="ParentEmail"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Phone Number"
            id="ParentPhoneNumber"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Relationship"
            id="ParentRelationship"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Occupation"
            id="ParentOccupation"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Work Number"
            id="ParentWorkNumber"
            handleChange={handleChange}
          />
          <FormTextInput
            label="Address"
            id="ParentAddress"
            handleChange={handleChange}
          />
        </section>
        {
          error && <p className="text-red-500">{errorMessage}</p>
        }
        {
        error && <p className="text-red-500">{message}</p>

        }
        <Button
          className="text-lg font-bold uppercase"
          gradientDuoTone={"tealToLime"}
          outline
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </main>
  );
}
