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
}