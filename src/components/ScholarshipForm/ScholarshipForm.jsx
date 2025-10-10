import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";

const ScholarshipForm = () => {
  const formDataFormat = {
    passportPhotoFileName: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    stateUT: "",
    pincode: "",
    isBenchmarkDisability: "",
    disabilityType: "",
    category: "",
    disabilityCertificateFileName: "",
    familyIncome: "",
    isCurrentlyWorking: "",
    workingDetails: "",
    scholarshipSourceInfo: "",
    tenthStudyMedium: "",
    twelfthStudyMedium: "",
    educationLevel: "",
    currentlyStudying: "",
    currentEducationMedium: "",
    eligibleForCGL2025: "",
    preparingForCGL2025: "",
    cgl2025Attempt: "",
    clearedOtherGovtExams: "",
    preparationMethod: "",
    practiceMethod: "",
    isPartOfStudyGroup: "",
    studyGroupName: "",
    hasLaptop: "",
    hasSmartPhone: "",
    hasKeypadMobile: "",
    hasTabletAndroid: "",
    hasTabletiPad: "",
    hasLaptop: "",
    hasDesktop: "",
    receivedPreviousScholarship: "",
    previousScholarshipDetails: "",
    scholarshipNeeded: "",
    scholarshipEssay: "",
    volunteerRole: "",
    messageTo1EQ: "",
    declarationInfoTrue: "",
    declarationInfoAccurate: "",
    consentToContact: "",
    participateInSurvey: "",
    signatureData: "",
  };

  const total_states = [
    "Personal-Information",
    "SSC-Exam-Information",
    "Exam-Preperation",
    "Scholarship-Details",
    "Decleration",
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formData, setFormData] = useState(formDataFormat);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tabActiveState, setTabActiveState] = useState(
    total_states[currentIndex]
  );

  function handlePreviousClick(e) {
    e.preventDefault();

    if (currentIndex > 0) {
      setTabActiveState(total_states[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleNextPage(e) {
    e.preventDefault();
    sendData();
    if (currentIndex < total_states.length - 1) {
      setTabActiveState(total_states[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  }

  const dataObject = {
    fullName: firstName + " " + lastName,
    passportPhotoFileName: formData.passportPhotoFileName,
    gender: formData.gender,
    dateOfBirth: formData.dateOfBirth,
    mobileNumber: formData.mobileNumber,
    email: formData.email,
    addressLine1: formData.addressLine1,
    addressLine2: formData.addressLine2,
    city: formData.city,
    stateUT: formData.stateUT,
    pincode: formData.pincode,
    isBenchmarkDisability: formData.isBenchmarkDisability,
    disabilityType: formData.disabilityType,
    category: formData.category,
    disabilityCertificateFileName: formData.disabilityCertificateFileName,
    familyIncome: formData.familyIncome,
    isCurrentlyWorking: formData.isCurrentlyWorking,
    workingDetails: formData.workingDetails,
    scholarshipSourceInfo: formData.scholarshipSourceInfo,
    tenthStudyMedium: formData.tenthStudyMedium,
    twelfthStudyMedium: formData.twelfthStudyMedium,
    educationLevel: formData.educationLevel,
    currentlyStudying: formData.currentlyStudying,
    currentEducationMedium: formData.currentEducationMedium,
    eligibleForCGL2025: formData.eligibleForCGL2025,
    preparingForCGL2025: formData.preparingForCGL2025,
    cgl2025Attempt: formData.cgl2025Attempt,
    clearedOtherGovtExams: formData.clearedOtherGovtExams,
    preparationMethod: formData.preparationMethod,
    practiceMethod: formData.practiceMethod,
    isPartOfStudyGroup: formData.isPartOfStudyGroup,
    studyGroupName: formData.studyGroupName,
    hasMobilePhone: formData.hasMobilePhone,
    hasSmartPhone: formData.hasSmartPhone,
    hasKeypadMobile: formData.hasKeypadMobile,
    hasTabletAndroid: formData.hasTabletAndroid,
    hasTabletiPad: formData.hasTabletiPad,
    hasLaptop: formData.hasLaptop,
    hasDesktop: formData.hasDesktop,
    receivedPreviousScholarship: formData.receivedPreviousScholarship,
    previousScholarshipDetails: formData.previousScholarshipDetails,
    scholarshipNeeded: formData.scholarshipNeeded,
    scholarshipEssay: formData.scholarshipEssay,
    volunteerRole: formData.volunteerRole,
    messageTo1EQ: formData.messageTo1EQ,
    declarationInfoTrue: formData.declarationInfoTrue,
    declarationInfoAccurate: formData.declarationInfoAccurate,
    consentToContact: formData.consentToContact,
    participateInSurvey: formData.participateInSurvey,
    signatureData: formData.signatureData,
  };

  async function sendData() {
    const url = "https://store.1ayq.com/scholarship";
    try {
      console.log(dataObject);
      const response = await axios.post(url, dataObject);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });
  }, [tabActiveState]);

  return (
    <section className="flex items-center justify-center  w-full py-10 overflow-auto">
      <div className="w-[70%] min-w-[1176px]  max-w-[1200px]  h-full flex flex-col">
        <div className="flex flex-col gap-3">
          <p className="text-[#1e2939] font-[600] text-[29px]">
            1EQ Scholarship for Deaf - Application Form (PWD Category)
          </p>

          <div className="rounded-lg bg-[#f9fafb] py-6 px-8 flex flex-col gap-8">
            <p className="text-[#364053] text-[17px]">
              <b>IMPORTANT INFORMATION : </b>Only for People with Disability
              (PWD) Category/Deaf Aspirants. Welcome to Christopher Benninger
              Memorial Scholarship by 1EQ foundation This is a NEED-based
              DIGITAL SCHOLARSHIP offering upto 60,000 for ALL Students. Any
              student aspiring to study DIGITAL Skills can apply for this
              scholarship. This scholarship is specifically NOT a merit based
              one. Kindly DO NOT apply, if you are working or from a family of
              means or you are selected in any kind of Government Job. Please
              check spelling and Recheck Information. Only the completed
              applications will be considered for the scholarship.
            </p>

            <p className="text-[#364053] text-[17px]">
              महत्वपूर्ण जानकारी: यह छात्रवृत्ति केवल विकलांग व्यक्तियों (PWD)
              श्रेणी/बधिर अभ्यर्थियों के लिए है। यह एक आवश्यकता-आधारित डिजिटल
              छात्रवृत्ति है जो सभी छात्रों के लिए 60,000 तक की राशि प्रदान करती
              है। यदि आप काम कर रहे हैं या साधन संपन्न परिवार से हैं या किसी भी
              प्रकार की सरकारी नौकरी में चुने गए हैं तो कृपया आवेदन न करें। केवल
              पूर्ण आवेदन ही छात्रवृत्ति के लिए माने जाएंगे।
            </p>
          </div>
        </div>

        <div className="border rounded-md py-6 px-8 my-10 border-[#e5e5e5] flex flex-col gap-4 overflow-auto">
          <p className="text-[16px] text-[#4a5565]">
            <span className="text-[#b85a3e]">1EQ</span> SCHOLARSHIP APPLICATION
          </p>

          <div className="flex items-center gap-3 min-w-max">
            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              <div className="text-white  font-[500] flex items-center justify-center h-full w-full bg-[#b85a3e]">
                1
              </div>

              <div className="h-full w-full hidden">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#00C950"
                  />
                  <path
                    d="M12.344 22.704C12.344 22.5653 12.3173 22.496 12.264 22.496L11.896 22.672C11.896 22.5973 11.8533 22.544 11.768 22.512L11.64 22.496C11.5547 22.496 11.448 22.5333 11.32 22.608C11.2987 22.5547 11.272 22.5013 11.24 22.448C11.208 22.3947 11.1813 22.3467 11.16 22.304C11.0213 22.0373 10.8827 21.744 10.744 21.424C10.616 21.0933 10.4933 20.7787 10.376 20.48C10.2693 20.1813 10.184 19.9467 10.12 19.776C10.0773 19.6373 10.0293 19.4293 9.976 19.152C9.92267 18.8747 9.86933 18.5227 9.816 18.096C9.93333 18.1707 10.024 18.208 10.088 18.208C10.1627 18.208 10.232 18.096 10.296 17.872C10.328 17.9147 10.3867 17.936 10.472 17.936C10.536 17.936 10.584 17.9147 10.616 17.872L10.872 17.488L11.16 17.584H11.176C11.1973 17.584 11.2187 17.5733 11.24 17.552C11.2613 17.5307 11.2933 17.5093 11.336 17.488C11.4213 17.4347 11.4853 17.408 11.528 17.408L11.576 17.424C11.8427 17.552 12.0133 17.7867 12.088 18.128C12.28 18.9387 12.472 19.344 12.664 19.344C12.856 19.344 13.08 19.1413 13.336 18.736C13.464 18.5333 13.592 18.2987 13.72 18.032C13.8587 17.7653 13.9973 17.4667 14.136 17.136C14.1573 17.264 14.1787 17.328 14.2 17.328C14.2533 17.328 14.344 17.1947 14.472 16.928C14.6107 16.6613 14.8293 16.2933 15.128 15.824C15.2987 15.536 15.512 15.2107 15.768 14.848C16.0347 14.4853 16.3173 14.112 16.616 13.728C16.9147 13.344 17.2027 12.9813 17.48 12.64C17.768 12.2987 18.024 12.0053 18.248 11.76C18.472 11.5147 18.6373 11.3547 18.744 11.28C19.1493 11.0027 19.4693 10.736 19.704 10.48C19.6933 10.5547 19.6773 10.624 19.656 10.688C19.6453 10.7413 19.64 10.7787 19.64 10.8C19.64 10.8427 19.6613 10.864 19.704 10.864L20.152 10.64V10.704C20.152 10.7893 20.1733 10.832 20.216 10.832C20.248 10.832 20.312 10.784 20.408 10.688C20.504 10.592 20.5573 10.5227 20.568 10.48L20.536 10.704L21.08 10.384L20.952 10.672C21.1227 10.5547 21.2453 10.496 21.32 10.496C21.3627 10.496 21.3947 10.5227 21.416 10.576C21.4373 10.6187 21.448 10.6613 21.448 10.704C21.448 10.768 21.4213 10.8427 21.368 10.928C21.3147 11.0133 21.2453 11.1147 21.16 11.232C21.096 11.3173 20.9893 11.4453 20.84 11.616C20.7013 11.776 20.488 12.016 20.2 12.336C19.912 12.6453 19.528 13.0773 19.048 13.632C18.92 13.7707 18.7227 14.016 18.456 14.368C18.1893 14.7093 17.8853 15.1093 17.544 15.568C17.2133 16.016 16.8827 16.4693 16.552 16.928C16.2213 17.3867 15.928 17.8027 15.672 18.176C15.416 18.5387 15.2347 18.8107 15.128 18.992L14.136 20.672C13.9227 21.0347 13.7467 21.3333 13.608 21.568C13.4693 21.792 13.3627 21.9467 13.288 22.032C13.128 22.224 12.952 22.3947 12.76 22.544L12.616 22.464L12.488 22.544L12.344 22.704Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <span className="text-[16px] status-name  font-[500] text-[#0a0a0a] ">
              Personal Information
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div className="w-1/2 h-full bg-[#b85a3e]"></div>
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              <div className="text-white  font-[500] flex items-center justify-center h-full w-full bg-[#e5e7eb]">
                2
              </div>

              <div className="h-full w-full hidden">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#00C950"
                  />
                  <path
                    d="M12.344 22.704C12.344 22.5653 12.3173 22.496 12.264 22.496L11.896 22.672C11.896 22.5973 11.8533 22.544 11.768 22.512L11.64 22.496C11.5547 22.496 11.448 22.5333 11.32 22.608C11.2987 22.5547 11.272 22.5013 11.24 22.448C11.208 22.3947 11.1813 22.3467 11.16 22.304C11.0213 22.0373 10.8827 21.744 10.744 21.424C10.616 21.0933 10.4933 20.7787 10.376 20.48C10.2693 20.1813 10.184 19.9467 10.12 19.776C10.0773 19.6373 10.0293 19.4293 9.976 19.152C9.92267 18.8747 9.86933 18.5227 9.816 18.096C9.93333 18.1707 10.024 18.208 10.088 18.208C10.1627 18.208 10.232 18.096 10.296 17.872C10.328 17.9147 10.3867 17.936 10.472 17.936C10.536 17.936 10.584 17.9147 10.616 17.872L10.872 17.488L11.16 17.584H11.176C11.1973 17.584 11.2187 17.5733 11.24 17.552C11.2613 17.5307 11.2933 17.5093 11.336 17.488C11.4213 17.4347 11.4853 17.408 11.528 17.408L11.576 17.424C11.8427 17.552 12.0133 17.7867 12.088 18.128C12.28 18.9387 12.472 19.344 12.664 19.344C12.856 19.344 13.08 19.1413 13.336 18.736C13.464 18.5333 13.592 18.2987 13.72 18.032C13.8587 17.7653 13.9973 17.4667 14.136 17.136C14.1573 17.264 14.1787 17.328 14.2 17.328C14.2533 17.328 14.344 17.1947 14.472 16.928C14.6107 16.6613 14.8293 16.2933 15.128 15.824C15.2987 15.536 15.512 15.2107 15.768 14.848C16.0347 14.4853 16.3173 14.112 16.616 13.728C16.9147 13.344 17.2027 12.9813 17.48 12.64C17.768 12.2987 18.024 12.0053 18.248 11.76C18.472 11.5147 18.6373 11.3547 18.744 11.28C19.1493 11.0027 19.4693 10.736 19.704 10.48C19.6933 10.5547 19.6773 10.624 19.656 10.688C19.6453 10.7413 19.64 10.7787 19.64 10.8C19.64 10.8427 19.6613 10.864 19.704 10.864L20.152 10.64V10.704C20.152 10.7893 20.1733 10.832 20.216 10.832C20.248 10.832 20.312 10.784 20.408 10.688C20.504 10.592 20.5573 10.5227 20.568 10.48L20.536 10.704L21.08 10.384L20.952 10.672C21.1227 10.5547 21.2453 10.496 21.32 10.496C21.3627 10.496 21.3947 10.5227 21.416 10.576C21.4373 10.6187 21.448 10.6613 21.448 10.704C21.448 10.768 21.4213 10.8427 21.368 10.928C21.3147 11.0133 21.2453 11.1147 21.16 11.232C21.096 11.3173 20.9893 11.4453 20.84 11.616C20.7013 11.776 20.488 12.016 20.2 12.336C19.912 12.6453 19.528 13.0773 19.048 13.632C18.92 13.7707 18.7227 14.016 18.456 14.368C18.1893 14.7093 17.8853 15.1093 17.544 15.568C17.2133 16.016 16.8827 16.4693 16.552 16.928C16.2213 17.3867 15.928 17.8027 15.672 18.176C15.416 18.5387 15.2347 18.8107 15.128 18.992L14.136 20.672C13.9227 21.0347 13.7467 21.3333 13.608 21.568C13.4693 21.792 13.3627 21.9467 13.288 22.032C13.128 22.224 12.952 22.3947 12.76 22.544L12.616 22.464L12.488 22.544L12.344 22.704Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <span className="text-[16px] status-name  text-[#4a5464] ">
              SSC Exam Information
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              <div className="text-white  font-[500] flex items-center justify-center h-full w-full bg-[#e5e7eb]">
                3
              </div>

              <div className="h-full w-full hidden">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#00C950"
                  />
                  <path
                    d="M12.344 22.704C12.344 22.5653 12.3173 22.496 12.264 22.496L11.896 22.672C11.896 22.5973 11.8533 22.544 11.768 22.512L11.64 22.496C11.5547 22.496 11.448 22.5333 11.32 22.608C11.2987 22.5547 11.272 22.5013 11.24 22.448C11.208 22.3947 11.1813 22.3467 11.16 22.304C11.0213 22.0373 10.8827 21.744 10.744 21.424C10.616 21.0933 10.4933 20.7787 10.376 20.48C10.2693 20.1813 10.184 19.9467 10.12 19.776C10.0773 19.6373 10.0293 19.4293 9.976 19.152C9.92267 18.8747 9.86933 18.5227 9.816 18.096C9.93333 18.1707 10.024 18.208 10.088 18.208C10.1627 18.208 10.232 18.096 10.296 17.872C10.328 17.9147 10.3867 17.936 10.472 17.936C10.536 17.936 10.584 17.9147 10.616 17.872L10.872 17.488L11.16 17.584H11.176C11.1973 17.584 11.2187 17.5733 11.24 17.552C11.2613 17.5307 11.2933 17.5093 11.336 17.488C11.4213 17.4347 11.4853 17.408 11.528 17.408L11.576 17.424C11.8427 17.552 12.0133 17.7867 12.088 18.128C12.28 18.9387 12.472 19.344 12.664 19.344C12.856 19.344 13.08 19.1413 13.336 18.736C13.464 18.5333 13.592 18.2987 13.72 18.032C13.8587 17.7653 13.9973 17.4667 14.136 17.136C14.1573 17.264 14.1787 17.328 14.2 17.328C14.2533 17.328 14.344 17.1947 14.472 16.928C14.6107 16.6613 14.8293 16.2933 15.128 15.824C15.2987 15.536 15.512 15.2107 15.768 14.848C16.0347 14.4853 16.3173 14.112 16.616 13.728C16.9147 13.344 17.2027 12.9813 17.48 12.64C17.768 12.2987 18.024 12.0053 18.248 11.76C18.472 11.5147 18.6373 11.3547 18.744 11.28C19.1493 11.0027 19.4693 10.736 19.704 10.48C19.6933 10.5547 19.6773 10.624 19.656 10.688C19.6453 10.7413 19.64 10.7787 19.64 10.8C19.64 10.8427 19.6613 10.864 19.704 10.864L20.152 10.64V10.704C20.152 10.7893 20.1733 10.832 20.216 10.832C20.248 10.832 20.312 10.784 20.408 10.688C20.504 10.592 20.5573 10.5227 20.568 10.48L20.536 10.704L21.08 10.384L20.952 10.672C21.1227 10.5547 21.2453 10.496 21.32 10.496C21.3627 10.496 21.3947 10.5227 21.416 10.576C21.4373 10.6187 21.448 10.6613 21.448 10.704C21.448 10.768 21.4213 10.8427 21.368 10.928C21.3147 11.0133 21.2453 11.1147 21.16 11.232C21.096 11.3173 20.9893 11.4453 20.84 11.616C20.7013 11.776 20.488 12.016 20.2 12.336C19.912 12.6453 19.528 13.0773 19.048 13.632C18.92 13.7707 18.7227 14.016 18.456 14.368C18.1893 14.7093 17.8853 15.1093 17.544 15.568C17.2133 16.016 16.8827 16.4693 16.552 16.928C16.2213 17.3867 15.928 17.8027 15.672 18.176C15.416 18.5387 15.2347 18.8107 15.128 18.992L14.136 20.672C13.9227 21.0347 13.7467 21.3333 13.608 21.568C13.4693 21.792 13.3627 21.9467 13.288 22.032C13.128 22.224 12.952 22.3947 12.76 22.544L12.616 22.464L12.488 22.544L12.344 22.704Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <span className="text-[16px] status-name  text-[#4a5464] ">
              Exam Preperation
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              <div className="text-white  font-[500] flex items-center justify-center h-full w-full bg-[#e5e7eb]">
                4
              </div>

              <div className="h-full w-full hidden">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#00C950"
                  />
                  <path
                    d="M12.344 22.704C12.344 22.5653 12.3173 22.496 12.264 22.496L11.896 22.672C11.896 22.5973 11.8533 22.544 11.768 22.512L11.64 22.496C11.5547 22.496 11.448 22.5333 11.32 22.608C11.2987 22.5547 11.272 22.5013 11.24 22.448C11.208 22.3947 11.1813 22.3467 11.16 22.304C11.0213 22.0373 10.8827 21.744 10.744 21.424C10.616 21.0933 10.4933 20.7787 10.376 20.48C10.2693 20.1813 10.184 19.9467 10.12 19.776C10.0773 19.6373 10.0293 19.4293 9.976 19.152C9.92267 18.8747 9.86933 18.5227 9.816 18.096C9.93333 18.1707 10.024 18.208 10.088 18.208C10.1627 18.208 10.232 18.096 10.296 17.872C10.328 17.9147 10.3867 17.936 10.472 17.936C10.536 17.936 10.584 17.9147 10.616 17.872L10.872 17.488L11.16 17.584H11.176C11.1973 17.584 11.2187 17.5733 11.24 17.552C11.2613 17.5307 11.2933 17.5093 11.336 17.488C11.4213 17.4347 11.4853 17.408 11.528 17.408L11.576 17.424C11.8427 17.552 12.0133 17.7867 12.088 18.128C12.28 18.9387 12.472 19.344 12.664 19.344C12.856 19.344 13.08 19.1413 13.336 18.736C13.464 18.5333 13.592 18.2987 13.72 18.032C13.8587 17.7653 13.9973 17.4667 14.136 17.136C14.1573 17.264 14.1787 17.328 14.2 17.328C14.2533 17.328 14.344 17.1947 14.472 16.928C14.6107 16.6613 14.8293 16.2933 15.128 15.824C15.2987 15.536 15.512 15.2107 15.768 14.848C16.0347 14.4853 16.3173 14.112 16.616 13.728C16.9147 13.344 17.2027 12.9813 17.48 12.64C17.768 12.2987 18.024 12.0053 18.248 11.76C18.472 11.5147 18.6373 11.3547 18.744 11.28C19.1493 11.0027 19.4693 10.736 19.704 10.48C19.6933 10.5547 19.6773 10.624 19.656 10.688C19.6453 10.7413 19.64 10.7787 19.64 10.8C19.64 10.8427 19.6613 10.864 19.704 10.864L20.152 10.64V10.704C20.152 10.7893 20.1733 10.832 20.216 10.832C20.248 10.832 20.312 10.784 20.408 10.688C20.504 10.592 20.5573 10.5227 20.568 10.48L20.536 10.704L21.08 10.384L20.952 10.672C21.1227 10.5547 21.2453 10.496 21.32 10.496C21.3627 10.496 21.3947 10.5227 21.416 10.576C21.4373 10.6187 21.448 10.6613 21.448 10.704C21.448 10.768 21.4213 10.8427 21.368 10.928C21.3147 11.0133 21.2453 11.1147 21.16 11.232C21.096 11.3173 20.9893 11.4453 20.84 11.616C20.7013 11.776 20.488 12.016 20.2 12.336C19.912 12.6453 19.528 13.0773 19.048 13.632C18.92 13.7707 18.7227 14.016 18.456 14.368C18.1893 14.7093 17.8853 15.1093 17.544 15.568C17.2133 16.016 16.8827 16.4693 16.552 16.928C16.2213 17.3867 15.928 17.8027 15.672 18.176C15.416 18.5387 15.2347 18.8107 15.128 18.992L14.136 20.672C13.9227 21.0347 13.7467 21.3333 13.608 21.568C13.4693 21.792 13.3627 21.9467 13.288 22.032C13.128 22.224 12.952 22.3947 12.76 22.544L12.616 22.464L12.488 22.544L12.344 22.704Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <span className="text-[16px] status-name  text-[#4a5464] ">
              Scholarship Details
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
              <div className="w-1/2 h-full bg-[#e5e7ea]"></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              <div className="text-white  font-[500] flex items-center justify-center h-full w-full bg-[#e5e7eb]">
                5
              </div>

              <div className="h-full w-full hidden">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#00C950"
                  />
                  <path
                    d="M12.344 22.704C12.344 22.5653 12.3173 22.496 12.264 22.496L11.896 22.672C11.896 22.5973 11.8533 22.544 11.768 22.512L11.64 22.496C11.5547 22.496 11.448 22.5333 11.32 22.608C11.2987 22.5547 11.272 22.5013 11.24 22.448C11.208 22.3947 11.1813 22.3467 11.16 22.304C11.0213 22.0373 10.8827 21.744 10.744 21.424C10.616 21.0933 10.4933 20.7787 10.376 20.48C10.2693 20.1813 10.184 19.9467 10.12 19.776C10.0773 19.6373 10.0293 19.4293 9.976 19.152C9.92267 18.8747 9.86933 18.5227 9.816 18.096C9.93333 18.1707 10.024 18.208 10.088 18.208C10.1627 18.208 10.232 18.096 10.296 17.872C10.328 17.9147 10.3867 17.936 10.472 17.936C10.536 17.936 10.584 17.9147 10.616 17.872L10.872 17.488L11.16 17.584H11.176C11.1973 17.584 11.2187 17.5733 11.24 17.552C11.2613 17.5307 11.2933 17.5093 11.336 17.488C11.4213 17.4347 11.4853 17.408 11.528 17.408L11.576 17.424C11.8427 17.552 12.0133 17.7867 12.088 18.128C12.28 18.9387 12.472 19.344 12.664 19.344C12.856 19.344 13.08 19.1413 13.336 18.736C13.464 18.5333 13.592 18.2987 13.72 18.032C13.8587 17.7653 13.9973 17.4667 14.136 17.136C14.1573 17.264 14.1787 17.328 14.2 17.328C14.2533 17.328 14.344 17.1947 14.472 16.928C14.6107 16.6613 14.8293 16.2933 15.128 15.824C15.2987 15.536 15.512 15.2107 15.768 14.848C16.0347 14.4853 16.3173 14.112 16.616 13.728C16.9147 13.344 17.2027 12.9813 17.48 12.64C17.768 12.2987 18.024 12.0053 18.248 11.76C18.472 11.5147 18.6373 11.3547 18.744 11.28C19.1493 11.0027 19.4693 10.736 19.704 10.48C19.6933 10.5547 19.6773 10.624 19.656 10.688C19.6453 10.7413 19.64 10.7787 19.64 10.8C19.64 10.8427 19.6613 10.864 19.704 10.864L20.152 10.64V10.704C20.152 10.7893 20.1733 10.832 20.216 10.832C20.248 10.832 20.312 10.784 20.408 10.688C20.504 10.592 20.5573 10.5227 20.568 10.48L20.536 10.704L21.08 10.384L20.952 10.672C21.1227 10.5547 21.2453 10.496 21.32 10.496C21.3627 10.496 21.3947 10.5227 21.416 10.576C21.4373 10.6187 21.448 10.6613 21.448 10.704C21.448 10.768 21.4213 10.8427 21.368 10.928C21.3147 11.0133 21.2453 11.1147 21.16 11.232C21.096 11.3173 20.9893 11.4453 20.84 11.616C20.7013 11.776 20.488 12.016 20.2 12.336C19.912 12.6453 19.528 13.0773 19.048 13.632C18.92 13.7707 18.7227 14.016 18.456 14.368C18.1893 14.7093 17.8853 15.1093 17.544 15.568C17.2133 16.016 16.8827 16.4693 16.552 16.928C16.2213 17.3867 15.928 17.8027 15.672 18.176C15.416 18.5387 15.2347 18.8107 15.128 18.992L14.136 20.672C13.9227 21.0347 13.7467 21.3333 13.608 21.568C13.4693 21.792 13.3627 21.9467 13.288 22.032C13.128 22.224 12.952 22.3947 12.76 22.544L12.616 22.464L12.488 22.544L12.344 22.704Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <span className="text-[16px] status-name  text-[#4a5464] ">
              Declaration
            </span>
          </div>
        </div>

        <form className="flex flex-col gap-6 px-8 mt-3">
          {tabActiveState === "Personal-Information" && (
            <div className="w-full flex flex-col gap-6 form-step-1">
              <div className="flex flex-col gap-3 ">
                <p className="text-[#1e2939] font-[600] text-[29px]">
                  Personal Information (व्यक्तिगत जानकारी)
                </p>
                <p className="text-[#4a5464] font-[400] text-[17px]">
                  Your information will be kept confidential. (आपकी जानकारी
                  गोपनीय रखी जाएगी)
                </p>
              </div>

              {/* full name  */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Applicant's Full Name (आवेदक का पूरा नाम)
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="first-name"
                    onChange={(elem) => setFirstName(elem.target.value)}
                    value={firstName}
                    required
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                    placeholder="First"
                  />
                  <input
                    type="text"
                    name="last-name"
                    onChange={(elem) => setLastName(elem.target.value)}
                    value={lastName}
                    required
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                    placeholder="Last"
                  />
                </div>
              </div>

              {/* user image */}
              <div className="w-full flex flex-col form-field gap-1">
                <label
                  className="text-[17px] text-[#0a0a0a]"
                  htmlFor="select-profile-image"
                >
                  Upload Your Passport Size Photograph (अपना पासपोर्ट साइज़ फोटो
                  अपलोड करें)
                </label>
                <div className="flex gap-3 min-h-30 items-center justify-center text-[17px] rounded-xl border-[2px] border-[#d1d5dd]">
                  {formData.passportPhotoFileName ? (
                    <div className="h-[90%] select-none w-max max-w-[80px] border relative  rounded-md">
                      <img
                        src={formData.passportPhotoFileName}
                        className="h-full w-full object-contain rounded-md"
                        alt=""
                      />
                      <span
                        onClick={() => {
                          URL.revokeObjectURL(formData.passportPhotoFileName);
                          setFormData({
                            ...formData,
                            passportPhotoFileName: "",
                          });
                        }}
                        className="cursor-pointer text-[15px] p-1 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-red-100 text-red-500 rounded-full flex items-center justify-center w-[10px] h-[22px] shrink-0 aspect-square "
                      >
                        <RxCross2 />
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <label
                        htmlFor="select-profile-image"
                        className="py-2  rounded-xl border px-3 cursor-pointer border-[#c91e2c] text-[17px] text-[#c91e2c] bg-[#fff7ed]"
                      >
                        Upload
                      </label>
                      <span className="text-[#4a5565]">
                        or drag files here.
                      </span>
                    </div>
                  )}

                  <input
                    type="file"
                    id="select-profile-image"
                    name="profile-image"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({
                          ...formData,
                          passportPhotoFileName: URL.createObjectURL(file),
                        });
                      }
                    }}
                    required
                    className="bg-[#f3f3f5] hidden grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                    placeholder="Select profile image"
                  />
                </div>

                <p className="text-[14px] text-[#6b7281] mt-2">
                  Upload your picture as per SSC Specifications (एसएससी
                  विनिर्देशों के अनुसार अपनी तस्वीर अपलोड करें)
                </p>
              </div>

              {/* Gender & Date of Birth */}
              <div className="flex gap-3 justify-end">
                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] text-[#0a0a0a]">Gender</label>
                  <div className="flex gap-3">
                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={() =>
                          setFormData({ ...formData, gender: "male" })
                        }
                        required
                      />
                      <span className="text-[#0a0a0a]">Male</span>
                    </label>

                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={() =>
                          setFormData({ ...formData, gender: "female" })
                        }
                        required
                      />
                      <span className="text-[#0a0a0a]">Female</span>
                    </label>

                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="transgender"
                        checked={formData.gender === "transgender"}
                        onChange={() =>
                          setFormData({ ...formData, gender: "transgender" })
                        }
                        required
                      />
                      <span className="text-[#0a0a0a]">Transgender</span>
                    </label>
                  </div>
                </div>

                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] text-[#0a0a0a]">
                    Date of Birth (जन्म की तारीख)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      required
                      name="date-of-birth"
                      className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* mobile number */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Mobile Number - मोबाइल नंबर
                </label>
                <div className="flex gap-3 before:content-['+91'] before:text-[#7a7a7b] before:absolute before:top-[50%] before:text-[17px] before:left-3 before:translate-y-[-50%] relative">
                  <input
                    type="number"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, mobileNumber: e.target.value })
                    }
                    name="number"
                    placeholder="Enter mobile number"
                    className="bg-[#f3f3f5] ps-[50px] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              {/* email */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Email (ईमेल आईडी)
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    name="email"
                    placeholder="Enter eamil address"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              {/* confirm email */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                  Re-Enter Your Email ID (Verify that there are no Spelling
                  Mistakes) - अपनी ईमेल आईडी पुनः दर्ज करें (सत्यापित करें कि
                  कोई वर्तनी गलतियां गलती नहीं हैं)
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    name="confirm-email"
                    placeholder="Re-enter eamil address"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
                <p className="text-[14px] text-[#6b7281] mt-2">
                  All Communication will be via EMail, So please take extra care
                  when you are entering information (सभी संचार ईमेल के माध्यम से
                  होगा, इसलिए जानकारी दर्ज करते समय अतिरिक्त सावधानी बरतें)
                </p>
              </div>

              {/* postal address */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                  Your Current Postal Address (आपका वर्तमान डाक पता)
                </label>
                <div className="flex gap-3 w-full flex-col">
                  <input
                    type="text"
                    required
                    value={formData.addressLine1}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLine1: e.target.value })
                    }
                    name="address-1"
                    placeholder="Address Line 1"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                  <input
                    type="text"
                    required
                    name="address-2"
                    value={formData.addressLine2}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLine2: e.target.value })
                    }
                    placeholder="Address Line 2"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      required
                      name="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="City"
                      className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                    />
                    <input
                      type="text"
                      required
                      name="zip-code"
                      value={formData.pincode}
                      onChange={(e) =>
                        setFormData({ ...formData, pincode: e.target.value })
                      }
                      placeholder="Postal / Zip Code"
                      className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* state & confirm postal code */}
              <div className="flex gap-3 justify-between pb-8 border-b border-[#e8e8e8]">
                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                    State / UT (राज्य/केंद्र शासित प्रदेश)
                  </label>

                  <select
                    required
                    name="state"
                    value={formData.stateUT}
                    onChange={(e) =>
                      setFormData({ ...formData, stateUT: e.target.value })
                    }
                    className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  >
                    <option value="" selected disabled>
                      -- Select --
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="uttarpradesh">Uttarpradesh</option>
                    <option value="madhyapradesh">Madhyapradesh</option>
                    <option value="punjab">Punjab</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bengal">Bengal</option>
                    <option value="bihar">Bihar</option>
                    <option value="haryana">Haryana</option>
                    <option value="gujrat">Gujrat</option>
                  </select>
                </div>

                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                    Re-Enter Pincode (पिनकोड दोबारा दर्ज करें)
                  </label>
                  <input
                    type="text"
                    required
                    name="zip-code"
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                    placeholder="Re-enter Postal / Zip Code"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              {/* person disability */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you a person with Benchmark Disability (PwBD)? - क्या आप
                  बेंचमार्क विकलांगता (पीडब्ल्यूबीडी) से पीड़ित व्यक्ति हैं?
                </label>
                <div className="flex gap-3">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="disability"
                      value="yes"
                      checked={formData.isBenchmarkDisability === "yes"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          isBenchmarkDisability: e.target.value,
                        })
                      }
                      required
                    />
                    <span className="text-[#0a0a0a]">Yes</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      checked={formData.isBenchmarkDisability === 'no'}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      type="radio"
                      name="disability"
                      value="no"
                      required
                    />
                    <span className="text-[#0a0a0a]">No</span>
                  </label>
                </div>
              </div>

              {/* disability type */}
              {
                formData.isBenchmarkDisability === 'yes' && (

              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                  Type of Disability (विकलांगता का प्रकार)
                </label>

                <select
                  required
                  name="disability-type"
                  value={formData.disabilityType}
                  onChange={(e) =>
                    setFormData({ ...formData, disabilityType: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="visual">Visual Impairment</option>
                  <option value="hearing">Hearing Impairment</option>
                  <option value="physical">Physical Disability</option>
                  <option value="intellectual">Intellectual Disability</option>
                  <option value="multiple">Multiple Disabilities</option>
                  <option value="speech">Speech Disability</option>
                  <option value="mental">Mental Health Condition</option>
                  <option value="autism">Autism Spectrum Disorder</option>
                  <option value="other">Other</option>
                </select>
              </div>
                )
              }

              {/* disability certificate  */}

              {
                formData.isBenchmarkDisability === 'yes' && (

              <div className="w-full flex flex-col form-field gap-1">
                <label
                  className="text-[17px] text-[#0a0a0a]"
                  htmlFor="select-disability-certificate"
                >
                  Upload Your Disability Certificate (अपना विकलांगता प्रमाणपत्र
                  अपलोड करें)
                </label>
                <div className="flex gap-3 min-h-30 items-center justify-center text-[17px] rounded-xl border-[2px] border-[#d1d5dd]">
                 {
                    formData.disabilityCertificateFileName ? (
                 <div className="flex gap-2 items-center">
                    <label
                      htmlFor="select-disability-certificate"
                      className="py-2  rounded-xl border px-3 cursor-pointer border-[#c91e2c] text-[17px] text-[#c91e2c] bg-[#fff7ed]"
                    >
                      Upload
                    </label>
                    <span className="text-[#4a5565]">or drag files here.</span>

                  </div>

                    ) : (

                    <div className="h-[90%] select-none w-max max-w-[80px] border relative  rounded-md">
                      <img
                        src="gunga.png"
                        className="h-full w-full object-contain"
                        alt=""
                      />
                      <span onClick={()=>formData.disabilityCertificateFileName = ''} className="cursor-pointer text-[15px] p-1 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-red-100 text-red-500 rounded-full flex items-center justify-center w-[10px] h-[22px] shrink-0 aspect-square ">
                        <RxCross2 />
                      </span>
                    </div>
                    )
                 } 

                  <input
                    type="file"
                    id="select-disability-certificate"
                    name="disability-certificate"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setFormData({
                            ...formData,
                            disabilityCertificateFileName: URL.createObjectURL(file),
                          });
                        }
                      }}
                    required
                    className="bg-[#f3f3f5] hidden grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                    placeholder="Select disability certificate"
                  />
                </div>

                <p className="text-[14px] text-[#6b7281] mt-2">
                  Upload your picture as per SSC Specifications (एसएससी
                  विनिर्देशों के अनुसार अपनी तस्वीर अपलोड करें)
                </p>
              </div>
                )
              }

              {/* category type */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                  Your Category (आपकी श्रेणी)
                </label>

                <select
                  required
                  name="disability-type"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    Select Your Category (अपनी श्रेणी का चयन करें)
                  </option>
                  <option value="general">General</option>
                  <option value="ews">EWS (Economically Weaker Section)</option>
                  <option value="obc">OBC (Other Backward Class)</option>
                  <option value="sc">SC (Scheduled Caste)</option>
                  <option value="st">ST (Scheduled Tribe)</option>
                  <option value="minority">Minority</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* family income */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Your Family Income (आपकी पारिवारिक आय)
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    value={formData.familyIncome}
                    onChange={(e) =>
                      setFormData({ ...formData, familyIncome: e.target.value })
                    }
                    name="family income"
                    placeholder="Enter Family Income"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              {/* working details */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you Presently Working? (क्या आप वर्तमान में कार्यरत हैं?)
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    value={formData.workingDetails}
                    onChange={(e) =>
                      setFormData({ ...formData, workingDetails: e.target.value })
                    }
                    name="currently working"
                    placeholder="Yes/No and details"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              {/* scholarship program referral */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px] pb-8 border-b border-[#e8e8e8]">
                <label className="text-[17px] text-[#0a0a0a]">
                  How did you learn about this Scholarship Program? (आपको इस
                  छात्रवृत्ति कार्यक्रम के बारे में कैसे पता चला?)
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    value={formData.scholarshipSourceInfo}
                    onChange={(e) =>
                      setFormData({ ...formData, scholarshipSourceInfo: e.target.value })
                    }
                    name="scholarship program referral"
                    placeholder="Please specify how you learned about this program"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              <p className="font-[500] text-[19px] text-[#0a0a0a]">
                Your Academic Information (आपकी शैक्षणिक जानकारी)
              </p>

              {/* 10th & 12th Medium */}
              <div className="flex gap-3 justify-between pb-8 border-b border-[#e8e8e8]">
                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                    10th - Study Medium (10वीं - अध्ययन माध्यम)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.tenthStudyMedium}
                    onChange={(e) =>
                      setFormData({ ...formData, tenthStudyMedium: e.target.value })
                    }
                    name="10th study medium"
                    placeholder="Enter study nedium"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>

                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                    12th - Study Medium (12वीं - अध्ययन माध्यम)
                  </label>
                  <input
                    type="text"
                    value={formData.twelfthStudyMedium}
                    onChange={(e) =>
                      setFormData({ ...formData, twelfthStudyMedium: e.target.value })
                    }
                    required
                    name="12th study medium"
                    placeholder="Enter study nedium"
                    className="bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                  />
                </div>
              </div>

              {/* education 1ualification level  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Level of Education Qualification (शिक्षा योग्यता का स्तर)
                </label>

                <select
                  required
                  name="disability-type"
                  value={formData.educationLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, educationLevel: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="10th">10th (Secondary School)</option>
                  <option value="12th">12th (Higher Secondary)</option>
                  <option value="undergraduate">
                    Undergraduate (Bachelor’s Degree)
                  </option>
                  <option value="postgraduate">
                    Postgraduate (Master’s Degree)
                  </option>
                  <option value="phd">Ph.D.</option>
                </select>
              </div>

              {/* currently studiying  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you currently studying? (क्या आप अभी पढ़ रहे हैं?)
                </label>

                <select
                  required
                  name="currently-studiying"
                  value={formData.currentlyStudying}
                  onChange={(e) =>
                    setFormData({ ...formData, currentlyStudying: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* currently education medium  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Current Education Medium (वर्तमान शिक्षा माध्यम)
                </label>

                <select
                  required
                  value={formData.currentEducationMedium}
                  onChange={(e) =>
                    setFormData({ ...formData, currentEducationMedium: e.target.value })
                  }
                  name="current-education-medium"
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled >
                    -- Select --
                  </option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="marathi">Marathi</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                  <option value="kannada">Kannada</option>
                  <option value="malayalam">Malayalam</option>
                  <option value="gujarati">Gujarati</option>
                  <option value="bengali">Bengali</option>
                  <option value="punjabi">Punjabi</option>
                  <option value="urdu">Urdu</option>
                  <option value="odia">Odia</option>
                  <option value="assamese">Assamese</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {tabActiveState === "SSC-Exam-Information" && (
            <div className="w-full flex flex-col gap-6 form-step-2">
              <div className="flex flex-col gap-3 ">
                <p className="text-[#1e2939] font-[600] text-[29px]">
                  SSC Exam Information
                </p>
              </div>

              {/* eligible to appear cgl  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you eligible to appear for CGL 2025? (क्या आप सीजीएल 2025
                  में शामिल होने के पात्र हैं?)
                </label>

                <select
                  required
                  name="eligible-to-appear"
                  value={formData.eligibleForCGL2025}
                  onChange={(e) =>
                    setFormData({ ...formData, eligibleForCGL2025: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* preparing for cgl  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you preparing for CGL 2025? (क्या आप सीजीएल 2025 की तैयारी
                  कर रहे हैं?)
                </label>

                <select
                  required
                  name="preparing-for-cgl"
                  value={formData.preparingForCGL2025}
                  onChange={(e) =>
                    setFormData({ ...formData, preparingForCGL2025: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* which attempt  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  CGL 2025 will be your / सीजीएल 2025 आपका होगा (कौन सा प्रयास?)
                </label>

                <select
                  required
                  value={formData.cgl2025Attempt}
                  onChange={(e) =>
                    setFormData({ ...formData, cgl2025Attempt :e.target.value })
                  }
                  name="cgl-attempt-no"
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Which attempt? --
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              {/* cleared any govt exam  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Have You Cleared any other Government Exams? (क्या आपने कोई
                  अन्य सरकारी परीक्षा उत्तीर्ण की है?)
                </label>

                <textarea
                  name="cleared-any-exam"
                  required
                  value={formData.clearedOtherGovtExams}
                  onChange={(e) =>
                    setFormData({ ...formData, clearedOtherGovtExams: e.target.value })
                  }
                  placeholder="Cleared any government exam?"
                  className="bg-[#f3f3f5] resize-none h-30 grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                ></textarea>
              </div>
            </div>
          )}

          {tabActiveState === "Exam-Preperation" && (
            <div className="w-full flex flex-col gap-6 form-step-3">
              <div className="flex flex-col gap-3 ">
                <p className="text-[#1e2939] font-[600] text-[29px]">
                  Tell us about Your Exam Preparation
                </p>
              </div>

              {/* preparing source  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                How are You Preparing for the Exam? (आप परीक्षा की तैयारी कैसे कर रहे हैं?)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" value='Self Study' checked={formData.preparationMethod === 'Self Study'} onChange={(e)=>setFormData({...formData,preparationMethod:e.target.value })} required name="preparation-source" />
                    <span>Self Study / स्वयं अध्ययन</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required value='Coaching Center' checked={formData.preparationMethod === 'Coaching Center'} onChange={(e)=>setFormData({...formData,preparationMethod:e.target.value })} name="preparation-source" />
                    <span>Coaching Center / कोचिंग सेंटर</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required value='Online Paid Course' checked={formData.preparationMethod === 'Online Paid Course'} onChange={(e)=>setFormData({...formData,preparationMethod:e.target.value })} name="preparation-source" />
                    <span>Online Paid Courses / ऑनलाइन भुगतान पाठ्यक्रम</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required value='Online (Youtube) / Free Course' checked={formData.preparationMethod === 'Online (Youtube) / Free Course'} onChange={(e)=>setFormData({...formData,preparationMethod:e.target.value })} name="preparation-source" />
                    <span>
                      Online (You Tube) / Free Courses - ऑनलाइन (यूट्यूब) /
                      नि:शुल्क पाठ्यक्रम
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required name="preparation-source" />
                    <input
                      type="text"
                      value={formData.preparationMethod}
                      onChange={(e) =>
                        setFormData({ ...formData, preparationMethod: e.target.value })
                      }
                      placeholder="other"
                      className=" bg-[#f3f3f5] px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                    />
                  </label>
                </div>
              </div>

              {/* how are you preparing  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  How are you Practicing or Testing Yourself? (आप स्वयं का
                  अभ्यास या परीक्षण कैसे कर रहे हैं?)
                </label>
                <select
                  required
                  name="how-practicing"
                  value={formData.practiceMethod}
                  onChange={(e) =>
                    setFormData({ ...formData, practiceMethod: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="mock">Mock</option>
                  <option value="quiz">Quiz</option>
                </select>
              </div>

              {/* which attempt  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you Part of a Study Group? (क्या आप किसी अध्ययन समूह का
                  हिस्सा हैं?)
                </label>

                <select
                  required
                  name="cgl-attempt-no"
                  value={formData.isPartOfStudyGroup}
                  onChange={(e) =>
                    setFormData({ ...formData, isPartOfStudyGroup: e.target.value })
                  }
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Which attempt? --
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* study group name */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Can you share the Study Group Name? (Optional) - क्या आप
                  अध्ययन समूह का नाम साझा कर सकते हैं? (वैकल्पिक)
                </label>

                <input
                  type="text"
                  name="study-group-name"
                  value={formData.studyGroupName}
                  onChange={(e) =>
                    setFormData({ ...formData, studyGroupName: e.target.value })
                  }
                  placeholder="Any Study Group?"
                  className="bg-[#f3f3f5]  grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                />
              </div>

              <p className="text-[20px] font-[500] text-[#0a0a0a]">
                Which Gadgets / Equipment do you own? (आपके पास कौन से
                गैजेट/उपकरण हैं?)
              </p>

              {/* mobile phone */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Mobile Phone / मोबाइल फोन
                </label>
                <div className="flex gap-5">
                  <label className="flex gap-2 items-center">
                    <input type="radio" name="mobile-pnone" value={'yes'} checked={formData.hasMobilePhone} onChange={(e)=>setFormData({...formData, hasMobilePhone:e.target.value})} required />
                    <span className="text-[#0a0a0a]">
                      Smart Phone / स्मार्टफोन
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input type="radio" name="mobile-pnone" value={'yes'} required  onChange={(e)=>setFormData({...formData, hasMobilePhone:e.target.value})} />
                    <span className="text-[#0a0a0a]">
                      Keypad Mobile / कीपैड मोबाइल
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input type="radio" name="mobile-pnone" value={'yes'} onChange={(e)=>setFormData({...formData, hasMobilePhone:e.target.value})} required />
                    <span className="text-[#0a0a0a]">None / कोई नहीं</span>
                  </label>
                </div>
              </div>

              {/* tablet  */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Tablet (टैबलेट)
                </label>
                <div className="flex gap-5">
                  <label className="flex gap-2 items-center">
                    <input type="radio" name="tablet-device" value={'Andrid'} onChange={(e)=>setFormData({...formData, hasTabletAndroid:e.target.value})} required />
                    <span className="text-[#0a0a0a]">Android / एंड्रॉइड</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input type="radio" name="tablet-device" value={'ipd'}  onChange={(e)=>setFormData({...formData,hasTabletAndroid:e.target.value})} required />
                    <span className="text-[#0a0a0a]">iPad</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input type="radio" name="tablet-device" value={'radio'}  onChange={(e)=>setFormData({...formData, hasTabletAndroid:e.target.value})} required />
                    <span className="text-[#0a0a0a]">None / कोई नहीं</span>
                  </label>
                </div>
              </div>

              {/* computer  */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Computer (कंप्यूटर)
                </label>
                <div className="flex gap-5">
                  <label className="flex gap-2 items-center">
                    <input type="radio" name="computer-device value='yes"  onChange={(e)=>setFormData({...formData, hasLaptop:e.target.valu})} required />
                    <span className="text-[#0a0a0a]">Laptop / लैपटॉप</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input type="radio" name="computer-device value='yes"  onChange={(e)=>setFormData({...formData, hasLaptop:e.target.valu})} required />
                    <span className="text-[#0a0a0a]">DeskTop / डेस्कटॉप</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input type="radio" name="computer-device value='yes"  onChange={(e)=>setFormData({...formData, hasLaptop:e.target.valu})} required />
                    <span className="text-[#0a0a0a]">None / कोई नहीं</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {tabActiveState === "Scholarship-Details" && (
            <div className="w-full flex flex-col gap-6 form-step-4">
              <div className="flex flex-col gap-3 ">
                <p className="text-[#1e2939] font-[600] text-[29px]">
                  1EQ Scholarship Related (1EQ छात्रवृत्ति संबंधित)
                </p>
              </div>

              {/* recieved scholarship from 1 eq  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Have you received any Scholarships from 1EQ earlier? (क्या
                  आपको पहले 1EQ से कोई छात्रवृत्ति मिली है?)
                </label>

                <select
                  required
                  name="recieved-scholarship-from-1eq"
                  className="custom-dropdown bg-[#f3f3f5] grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                >
                  <option value="" selected disabled>
                    -- Select --
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* preparing source  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you eligible to appear for CGL 2025? (क्या आप सीजीएल 2025
                  में शामिल होने के पात्र हैं?)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" required name="scholarship-selection" />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">Gold</span>
                      <i>
                        Gold: 1EQ Complete Book Set + Digital Kit + Study Group
                      </i>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" required name="scholarship-selection" />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">Silver</span>
                      <i>
                        Silver: 1EQ Basic Book Set + Digital Kit + Study Group
                      </i>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" required name="scholarship-selection" />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">Bronze</span>
                      <i>Bronze: 1EQ Digital Kit + Study Group</i>
                    </p>
                  </label>
                </div>
              </div>

              {/* scholarship reqson describe */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a] w-full">
                  VERY IMPORTANT: Please explain why this Scholarship should be
                  awarded to you (or the Applicant you are recommending) -
                  Minimum 100 words, ideal 500 words. (ONLY IN ENGLISH). कृपया
                  बताएं कि यह छात्रवृत्ति आपको (या जिस आवेदक की आप अनुशंसा कर
                  रहे हैं) क्यों दी जानी चाहिए - न्यूनतम 100 शब्द (केवल अंग्रेजी
                  में)
                </label>

                <textarea
                  name="scholarship-reason"
                  required
                  placeholder="Please make sure that there are no Grammar or Spelling Mistakes (कृपया सुनिश्चित करें कि कोई व्याकरण या वर्तनी की गलतियाँ न हों)"
                  className="bg-[#f3f3f5] resize-none h-30 grow-1 px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                ></textarea>
              </div>
            </div>
          )}

          {tabActiveState === "Decleration" && (
            <div className="w-full flex flex-col gap-6 form-step-5">
              <div className="flex flex-col gap-3 ">
                <p className="text-[#1e2939] font-[600] text-[29px]">
                  DECLARATION
                </p>
              </div>

              {/* declaration 1  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  I hereby declare that the information given by me in this form
                  is true, complete and correct to the best of my knowledge and
                  belief. (मैं एतद्द्वारा घोषणा करता हूं कि इस फॉर्म में मेरे
                  द्वारा दी गई जानकारी मेरी सर्वोत्तम जानकारी और विश्वास के
                  अनुसार सत्य, पूर्ण और सही है।)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required name="aggrement-1" checked={formData.declarationInfoTrue === 'agreement1'} value={'agreement-1'}  onChange={(e)=>setFormData({...formData, delclarationInfoTrue:e.target.value})}/>
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                </div>
              </div>

              {/* declaration 2  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  I understand that in the event of any information being found
                  false or incorrect at any stage, my scholarship is liable to
                  cancelled. (मैं समझता हूं कि किसी भी स्तर पर कोई भी जानकारी
                  झूठी या गलत पाए जाने पर मेरी छात्रवृत्ति रद्द की जाएगी।){" "}
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required name="aggrement-2"checked={formData.declarationInfoTrue === 'agreement2'} value={'agreement-2'}  onChange={(e)=>setFormData({...formData, delclarationInfoTrue:e.target.value})}/>
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                </div>
              </div>

              {/* declaration 3  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  I give my consent to 1EQ to contact me or add me to Study
                  Groups or any Apps to help with my studies. (मैं 1EQ को मुझसे
                  संपर्क करने या मेरी पढ़ाई में मदद के लिए स्टडी ग्रुप या किसी
                  ऐप में जोड़ने के लिए अपनी सहमति देता हूं।)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required name="aggrement-3" checked={formData.declarationInfoTrue === 'agreement3'} value={'agreement-3'}  onChange={(e)=>setFormData({...formData, delclarationInfoTrue:e.target.value})}/>
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                </div>
              </div>

              {/* declaration 4  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  I will participate in any Marks Survey and inform 1EQ about my
                  Exam Results. (मैं किसी भी मार्क्स सर्वेक्षण में भाग लूंगा और
                  अपने परीक्षा परिणामों के बारे में 1EQ को सूचित करूंगा)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" required name="aggrement-3" checked={formData.declarationInfoTrue === 'agreement4'} value={'agreement-4'}  onChange={(e)=>setFormData({...formData, delclarationInfoTrue:e.target.value})}/>
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-2">
            {currentIndex > 0 && (
              <button
                type="button"
                onClick={handlePreviousClick}
                className="outline-none w-28 border  border-[#9aa0ae] text-[#0a0a0a]  font-[500] flex items-center justify-center gap-2 py-2 px-4 cursor-pointer rounded-md"
              >
                <FaArrowLeft />
                Back
              </button>
            )}

            {currentIndex === 4 ? (
              <button
                type="submit"
                onClick={sendData}
                className="outline-none w-28 border-none bg-[#00254e] text-white font-[500] flex items-center justify-center gap-2 py-2 px-4 cursor-pointer rounded-md"
              >
                Submit
                <FaArrowRight />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextPage}
                className="outline-none w-28 border-none bg-[#00254e] text-white font-[500] flex items-center justify-center gap-2 py-2 px-4 cursor-pointer rounded-md"
              >
                Next
                <FaArrowRight />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ScholarshipForm;
