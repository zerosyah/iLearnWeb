import { teacherImages } from '../Constants/Assets'

// Define the props type for TeacherYearCard
export type TeacherYearCardProps = {
    title: string,
        name: string,
        subject: string,
        grade: string,
        description: string,
        img: keyof typeof teacherImages
}
export type Slide = {
  imgurl: string;
  title: string;
  description: string; // short enough for a 300x400 slide image
  category: Array<string>;
};
export type SwiperSliderPropsData = {
    data: Slide[];
}
export type MobileOnlySectionPropData = {
    list: string[],
    title: string
}
export type MobileDisplayCardProps = {
    image: string;
    title: string;
    description: string;
}
export type StaffDisplayCardProps = {
    image: string;
    name: string;
    description: string;
    subject: string;
    grade: string;
    gender: string;
}

export type SchoolInformationCardProps = {
    informationName: string;
    name: string;
    telephoneNumber: string;
    phoneNumber: string;
    faxNumber: string;
    email: string;
    address: string;
    Role: string
}

export type UserProps = {
  user: {
    currentUser: {
        Role: string;
        Email: string;
        FirstName: string;
        LastName: string;
    }
    error: {message: string};
    loading: boolean;
  };
}

export type Student = {
  _id: string;
  FirstName: string;
  LastName: string;
  NickName: string;
  OtherNames: string[] | null;
  Email: string;
  PhoneNumber: string;
  HomeNumber: string;
  EmergencyNumber: string;

  IdNumber: string;
  BirthDate: string;
  Gender: string;
  Race: string;
  Religion: string;
  CountryOfOrigin: string;

  City: string;
  PhysicalAddress: string;
  PostalAddress: string;

  CourseOfStudy: string;
  YearOfStudy: string;
  CurrentGrade: string;
  GradeAppliedFor: string;
  HighestGradePassed: string;
  IsRepeating: boolean;
  ReasonForJoining: string;
  ReasonForLeaving: string;
  Status: "Pending" | "Accepted" | "Rejected" | string;

  PreviousSchoolName: string;
  PreviousSchoolAddress: string;
  PreviousSchoolCountry: string;
  PreviousSchoolNumber: string;
  PreviousSchoolPrincipal: string;
  PreviousSchoolRemovalLetter: string;

  HasAllergies: boolean;
  Allergies: string[] | null;
  HasDisabilities: boolean;
  Disabilities: string[] | null;
  HasMedicalConditions: boolean;
  MedicalConditions: string[] | null;
  HasSpecialNeeds: boolean;
  SpecialNeeds: string[] | null;
  HasMedicalAid: boolean;
  MedicalAid: string;
  MedicalAidNumber: string;

  HasSiblings: boolean;
  Siblings: string[] | null;

  ParentFirstName: string;
  ParentLastName: string;
  ParentRelationship: string;
  ParentEmail: string;
  ParentPhoneNumber: string;
  ParentWorkNumber: string;
  ParentOccupation: string;
  ParentAddress: string;
  ParentalConsent: string;

  CreatedAt: string; // ISO 8601
  UpdatedAt: string; // ISO 8601
}