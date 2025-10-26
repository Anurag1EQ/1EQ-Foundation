import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import axios from "axios";

const ScholarshipForm = () => {
  const formDataFormat = {
    // part 1
    passportPhotoFileName: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    confirmEmail: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    stateUT: "",
    pincode: "",
    confirmPincode: "",
    isBenchmarkDisability: "",
    disabilityType: "",
    category: "",
    disabilityCertificateFileName: "",
    familyIncome: "",
    isCurrentlyWorking: "",
    scholarshipSourceInfo: "",
    tenthStudyMedium: "",
    twelfthStudyMedium: "",
    educationLevel: "",
    currentlyStudying: "",
    currentEducationMedium: "",

    // part 2
    eligibleForCGL2025: "",
    preparingForCGL2025: "",
    cgl2025Attempt: "",
    clearedOtherGovtExams: "",

    // part 3
    preparationMethod: [],
    preperationMethodOthers: "",
    handlePreparationChange: function (e) {
      const val = e.target.value;
      setFormData((prev) => {
        const current = prev.preparationMethod || [];
        const exists = current.includes(val);
        const updated = exists
          ? current.filter((item) => item !== val)
          : [...current, val];
        if (updated.length <= 0) {
          setFormError((prev) => ({
            ...prev,
            preparationMethod: "Preperation method is required",
          }));
        } else {
          setFormError((prev) => ({ ...prev, preparationMethod: "" }));
        }  
        return { ...prev, preparationMethod: updated };
      });
    },
    practiceMethod: "",
    isPartOfStudyGroup: "",
    studyGroupName: "",
    hasComputer: "",
    hasTablet: "",
    hasMobile: "",

    // part 4
    receivedPreviousScholarship: "",
    previousScholarshipDetails: "",
    scholarshipNeeded: "",
    scholarshipEssay: "",
    volunteerRole: "",
    volunteerApproach: "",
    messageTo1EQ: "",

    // part 5
    declarationInfoTrue: "",
    declarationInfoAccurate: "",
    consentToContact: "",
    participateInSurvey: "",
    signatureData: "",
  };

  const formErrorMessages = {
    firstName: "",
    lastName: "",
    passportPhotoFileName: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    confirmEmail: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    stateUT: "",
    pincode: "",
    confirmPincode: "",
    isBenchmarkDisability: "",
    disabilityType: "",
    category: "",
    disabilityCertificateFileName: "",
    familyIncome: "",
    isCurrentlyWorking: "",
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
    hasComputer: "",
    hasTablet: "",
    hasMobile: "",

    receivedPreviousScholarship: "",
    previousScholarshipDetails: "",
    scholarshipNeeded: "",
    scholarshipEssay: "",
    volunteerRole: "",
    volunteerApproach: "",
    messageTo1EQ: "",

    declarationInfoTrue: "",
    declarationInfoAccurate: "",
    consentToContact: "",
    participateInSurvey: "",
    signatureData: "",
  };

  const indianRegions = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const disabilityType = [
    "VH : Blindness and Low vision",
    "HH : Deaf and Hard of Hearing",
    "OH : Locomotor Disability",
    "Others : Autism etc",
  ];

  const studyMedium = [
    "English",
    "Hindi",
    "Bengali",
    "Telugu",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Assamese",
    "Gujarati",
    "Konkani",
    "Odia",
  ];

  const casteCategory = ["UR", "EWS", "OBC", "SC", "ST"];
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
  const [formError, setFormError] = useState(formErrorMessages);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    if (currentIndex < total_states.length - 1) {
      setTabActiveState(total_states[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  }

  function validateForm() {
    let valid = true;

    // first name validation
    if (firstName.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        firstName: "First Name is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (firstName.trim().length < 4 && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        firstName: "First Name must be at least 4 characters long",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (firstName.trim().length > 20 && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        firstName: "First Name must be smaller than 20 characters",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, firstName: "" }));
    }

    // last name validation
    if (lastName.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({ ...prev, lastName: "Last Name is required" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (lastName.trim().length < 4 && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        lastName: "Last Name must be at least 4 characters long",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (lastName.trim().length > 20 && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        lastName: "Last Name must be smaller than 20 characters",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, lastName: "" }));
    }

    // passport photo validation
    if (formData.passportPhotoFileName.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        passportPhotoFileName: "Passport photo is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, passportPhotoFileName: "" }));
    }

    // gender validation
    if (formData.gender.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({ ...prev, gender: "Gender is required" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, gender: "" }));
    }

    // date of birth validation
    if (formData.dateOfBirth.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        dateOfBirth: "Date of Birth is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, dateOfBirth: "" }));
    }

    // mobile number validation
    if (formData.mobileNumber.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        mobileNumber: "Mobile number is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      !/^\d{10}$/.test(formData.mobileNumber.trim()) &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({
        ...prev,
        mobileNumber: "Mobile number must be 10 digits",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, mobileNumber: "" }));
    }

    // email validation
    if (formData.email.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({ ...prev, email: "Email is required" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim()) &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setFormError((prev) => ({ ...prev, email: "" }));
    }

    // confirm email validation
    if (formData.confirmEmail.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        confirmEmail: "Confirm email is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      formData.confirmEmail.trim() !== formData.email.trim() &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({
        ...prev,
        confirmEmail: "Email and Confirm Email do not match",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, confirmEmail: "" }));
    }

    // address line 1 validation
    if (formData.addressLine1.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        addressLine1: "Address line 1 is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (formData.addressLine1.trim().length < 10 && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        addressLine1: "Enter a valid address",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      formData.addressLine1.trim().length > 100 &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({
        ...prev,
        addressLine1: "Address is too long",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, addressLine1: "" }));
    }

    // address line 2 validation
    if (formData.addressLine2.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        addressLine2: "Address line 2 is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (formData.addressLine2.trim().length < 10 && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        addressLine2: "Enter a valid address",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      formData.addressLine2.trim().length > 100 &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({
        ...prev,
        addressLine2: "Address is too long",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, addressLine2: "" }));
    }

    // city validation
    if (formData.city.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({ ...prev, city: "City is required" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, city: "" }));
    }

    // pincode validation
    if (formData.pincode.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({ ...prev, pincode: "Pincode is required" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      (formData.pincode.trim() <= 0 ||
        formData.pincode.trim().length > 7 ||
        formData.pincode.trim().length < 4) &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({ ...prev, pincode: "Enter a valid pincode" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, pincode: "" }));
    }

    // state ut validation
    if (formData.stateUT.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({ ...prev, stateUT: "State UT is required" }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, stateUT: "" }));
    }

    // confirm pincode ut validation
    if (formData.confirmPincode.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        confirmPincode: "State UT is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      formData.confirmPincode.trim() !== formData.pincode.trim() &&
      currentIndex === 0
    ) {
      setFormError((prev) => ({
        ...prev,
        confirmPincode: "Pincode and Confirm Pincode do not match",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, confirmPincode: "" }));
    }

    // is benchmark with disability validation
    if (formData.isBenchmarkDisability.trim() === "" && currentIndex === 0) {
      setFormError((prev) => ({
        ...prev,
        isBenchmarkDisability: "Benchmark with Disability is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, isBenchmarkDisability: "" }));
    }

    // disability type validation
    if (
      formData.disabilityType.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        disabilityType: "Disability type is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, disabilityType: "" }));
    }

    // category  validation
    if (
      formData.category.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        category: "Category is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, category: "" }));
    }

    //  disability certificate validation
    if (
      formData.disabilityCertificateFileName.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        disabilityCertificateFileName: "Disability certificate is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({
        ...prev,
        disabilityCertificateFileName: "",
      }));
    }

    //  family income validation
    if (
      formData.familyIncome.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        familyIncome: "Family income is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, familyIncome: "" }));
    }

    //  currently working validation
    if (
      formData.isCurrentlyWorking.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        isCurrentlyWorking: "Currently working is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, isCurrentlyWorking: "" }));
    }

    //  scholarship refferal validation
    if (
      formData.scholarshipSourceInfo.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        scholarshipSourceInfo: "Scholarship refferal is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, scholarshipSourceInfo: "" }));
    }

    //  tenth class medium validation
    if (
      formData.tenthStudyMedium.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        tenthStudyMedium: "10th study medium is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, tenthStudyMedium: "" }));
    }

    //  twelth class medium validation
    if (
      formData.twelfthStudyMedium.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        twelfthStudyMedium: "12th study medium is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, twelfthStudyMedium: "" }));
    }

    //  education qualification validation
    if (
      formData.educationLevel.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        educationLevel: "Education qualification is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, educationLevel: "" }));
    }

    //  currently studying validation
    if (
      formData.currentlyStudying.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        currentlyStudying: "Currently studying is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, currentlyStudying: "" }));
    }

    //  current education medium validation
    if (
      formData.currentEducationMedium.trim() === "" &&
      currentIndex === 0 &&
      formData.isBenchmarkDisability === "yes"
    ) {
      setFormError((prev) => ({
        ...prev,
        currentEducationMedium: "Current education medium is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, currentEducationMedium: "" }));
    }

    //  eligible for CGL 2025 validation
    if (formData.eligibleForCGL2025.trim() === "" && currentIndex === 1) {
      setFormError((prev) => ({
        ...prev,
        eligibleForCGL2025: "Eligible for CGL 2025 is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, eligibleForCGL2025: "" }));
    }

    //  preparing for cgl 2025 validation
    if (formData.preparingForCGL2025.trim() === "" && currentIndex === 1) {
      setFormError((prev) => ({
        ...prev,
        preparingForCGL2025: "Preparing for CGL 2025 is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, preparingForCGL2025: "" }));
    }

    //  attempt cgl 2025 validation
    if (formData.cgl2025Attempt.trim() === "" && currentIndex === 1) {
      setFormError((prev) => ({
        ...prev,
        cgl2025Attempt: "Attempt for CGL 2025 is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, cgl2025Attempt: "" }));
    }

    //  cleared government exams validation
    if (formData.clearedOtherGovtExams.trim() === "" && currentIndex === 1) {
      setFormError((prev) => ({
        ...prev,
        clearedOtherGovtExams: "Cleared government exams is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, clearedOtherGovtExams: "" }));
    }
    
    //  preperation method validation
    if (formData.preparationMethod.length <= 0 && formData.preperationMethodOthers === "" && currentIndex === 2) {
      setFormError((prev) => ({
        ...prev,
        preparationMethod: "Preperation method is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, preparationMethod: "" }));
    }

    //  preparation method validation
    if (formData.practiceMethod.trim() === "" && currentIndex === 2) {
      setFormError((prev) => ({
        ...prev,
        practiceMethod: "Practice method is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, practiceMethod: "" }));
    }

    //  part of study group validation
    if (formData.isPartOfStudyGroup.trim() === "" && currentIndex === 2) {
      setFormError((prev) => ({
        ...prev,
        isPartOfStudyGroup: "Study gorup is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, isPartOfStudyGroup: "" }));
    }

    //  mobile device validation
    if (formData.hasMobile.trim() === "" && currentIndex === 2) {
      setFormError((prev) => ({
        ...prev,
        hasMobile: "Select any device",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, hasMobile: "" }));
    }

    //  tablet device validation
    if (formData.hasTablet.trim() === "" && currentIndex === 2) {
      setFormError((prev) => ({
        ...prev,
        hasTablet: "Select any device",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, hasTablet: "" }));
    }

    //  computer device validation
    if (formData.hasComputer.trim() === "" && currentIndex === 2) {
      setFormError((prev) => ({
        ...prev,
        hasComputer: "Select any device",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, hasComputer: "" }));
    }

    //  recieved scholarship from 1eq validation
    if (
      formData.receivedPreviousScholarship.trim() === "" &&
      currentIndex === 3
    ) {
      setFormError((prev) => ({
        ...prev,
        receivedPreviousScholarship: "Select this field",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, receivedPreviousScholarship: "" }));
    }

    //  previous scholarship details validation
    if (
      formData.previousScholarshipDetails.trim() === "" &&
      formData.receivedPreviousScholarship === "yes" &&
      currentIndex === 3
    ) {
      setFormError((prev) => ({
        ...prev,
        previousScholarshipDetails: "Choose which scholarship you received",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, previousScholarshipDetails: "" }));
    }

    //  which scholarship needed validation
    if (formData.scholarshipNeeded.trim() === "" && currentIndex === 3) {
      setFormError((prev) => ({
        ...prev,
        scholarshipNeeded: "Choose which scholarship you needed",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, scholarshipNeeded: "" }));
    }

    //  scholarship reason describe validation
    if (formData.scholarshipEssay.trim() === "" && currentIndex === 3) {
      setFormError((prev) => ({
        ...prev,
        scholarshipEssay: "Describe why you needed",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      formData.scholarshipEssay.trim().split(/\s+/).length < 100 &&
      currentIndex === 3
    ) {
      setFormError((prev) => ({
        ...prev,
        scholarshipEssay: "At least 100 words required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, scholarshipEssay: "" }));
    }

    //  volunteering role validation
    if (formData.volunteerRole.trim() === "" && currentIndex === 3) {
      setFormError((prev) => ({
        ...prev,
        volunteerRole: "Volunteering role is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, volunteerRole: "" }));
    }

    // approach for volunteering role validation
    if (
      formData.volunteerApproach.trim() === "" &&
      (formData.volunteerRole === "Telegram Group Admin" ||
        formData.volunteerRole ===
          "Recording Lessons in Indian Sign Language (ISL)" ||
        formData.volunteerRole === "Doubt Solving" ||
        formData.volunteerRole === "Proof Reading of Books" ||
        formData.volunteerRole === "I can Write Blogs") &&
      currentIndex === 3
    ) {
      setFormError((prev) => ({
        ...prev,
        volunteerApproach: "Volunteering approach is required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    }
    else if(
      formData.volunteerApproach.trim() === "" &&
      (formData.volunteerRole === "Telegram Group Admin" ||
        formData.volunteerRole ===
          "Recording Lessons in Indian Sign Language (ISL)" ||
        formData.volunteerRole === "Doubt Solving" ||
        formData.volunteerRole === "Proof Reading of Books" ||
        formData.volunteerRole === "I can Write Blogs") && formData.volunteerApproach.trim().split(/\s+/).length < 10 &&
      currentIndex === 3
    ){
      setFormError((prev) => ({
        ...prev,
        volunteerApproach: "Atleast 10 words required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    }
    else {
      setFormError((prev) => ({ ...prev, volunteerApproach: "" }));
    }

    // message to 1eq or jt validation
    if (formData.messageTo1EQ.trim() === "" && currentIndex === 3) {
      setFormError((prev) => ({
        ...prev,
        messageTo1EQ: "Write your message",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else if (
      formData.messageTo1EQ.trim().split(/\s+/).length < 10 &&
      currentIndex === 3
    ) {
      setFormError((prev) => ({
        ...prev,
        messageTo1EQ: "At least 10 words required",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, messageTo1EQ: "" }));
    }

    //  declaration 1 validation
    if (!formData.declarationInfoTrue && currentIndex === 4) {
      setFormError((prev) => ({
        ...prev,
        declarationInfoTrue: "Please check this field",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, declarationInfoTrue: "" }));
    }

    //  declaration 2 validation
    if (!formData.declarationInfoAccurate && currentIndex === 4) {
      setFormError((prev) => ({
        ...prev,
        declarationInfoAccurate: "Please check this field",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, declarationInfoAccurate: "" }));
    }

    //  declaration 3 validation
    if (!formData.consentToContact && currentIndex === 4) {
      setFormError((prev) => ({
        ...prev,
        consentToContact: "Please check this field",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, consentToContact: "" }));
    }

    //  declaration 4 validation
    if (!formData.participateInSurvey && currentIndex === 4) {
      setFormError((prev) => ({
        ...prev,
        participateInSurvey: "Please check this field",
      }));
      setError("Please fill all the required fields before proceeding.");
      valid = false;
    } else {
      setFormError((prev) => ({ ...prev, participateInSurvey: "" }));
    }

    if (valid) {
      setError("");
    }
    return valid;
  }



  const dataObject = {
    // part 1

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
    disabilityType:
      formData.isBenchmarkDisability === "yes"
        ? formData.disabilityType
        : (formData.disabilityType = ""),
    category:
      formData.isBenchmarkDisability === "yes"
        ? formData.category
        : (formData.category = ""),
    disabilityCertificateFileName:
      formData.isBenchmarkDisability === "yes"
        ? formData.disabilityCertificateFileName
        : (formData.disabilityCertificateFileName = ""),
    familyIncome:
      formData.isBenchmarkDisability === "yes"
        ? formData.familyIncome
        : (formData.familyIncome = ""),
    isCurrentlyWorking:
      formData.isBenchmarkDisability === "yes"
        ? formData.isCurrentlyWorking
        : (formData.isCurrentlyWorking = ""),
    scholarshipSourceInfo:
      formData.isBenchmarkDisability === "yes"
        ? formData.scholarshipSourceInfo
        : (formData.scholarshipSourceInfo = ""),
    tenthStudyMedium:
      formData.isBenchmarkDisability === "yes"
        ? formData.tenthStudyMedium
        : (formData.tenthStudyMedium = ""),
    twelfthStudyMedium:
      formData.isBenchmarkDisability === "yes"
        ? formData.twelfthStudyMedium
        : (formData.twelfthStudyMedium = ""),
    educationLevel:
      formData.isBenchmarkDisability === "yes"
        ? formData.educationLevel
        : (formData.educationLevel = ""),
    currentlyStudying:
      formData.isBenchmarkDisability === "yes"
        ? formData.currentlyStudying
        : (formData.currentlyStudying = ""),
    currentEducationMedium:
      formData.isBenchmarkDisability === "yes"
        ? formData.currentEducationMedium
        : (formData.currentEducationMedium = ""),

    // part 2

    eligibleForCGL2025: formData.eligibleForCGL2025,
    preparingForCGL2025: formData.preparingForCGL2025,
    cgl2025Attempt: formData.cgl2025Attempt,
    clearedOtherGovtExams: formData.clearedOtherGovtExams,

    // part 3

    preparationMethod: formData.preperationMethodOthers
      ? [...formData.preparationMethod, formData.preperationMethodOthers]
      : [...formData.preparationMethod],
    practiceMethod: formData.practiceMethod,
    isPartOfStudyGroup: formData.isPartOfStudyGroup,
    studyGroupName: formData.studyGroupName,
    hasComputer: formData.hasComputer,
    hasTablet: formData.hasTablet,
    hasMobile: formData.hasMobile,

    // part 4
    receivedPreviousScholarship: formData.receivedPreviousScholarship,
    previousScholarshipDetails:
      formData.receivedPreviousScholarship === "yes"
        ? formData.previousScholarshipDetails
        : (formData.previousScholarshipDetails = ""),
    scholarshipNeeded: formData.scholarshipNeeded,
    scholarshipEssay: formData.scholarshipEssay,
    volunteerRole: formData.volunteerRole,
    volunteerApproach:
      formData.volunteerRole === "Telegram Group Admin" ||
      formData.volunteerRole ===
        "Recording Lessons in Indian Sign Language (ISL)" ||
      formData.volunteerRole === "Doubt Solving" ||
      formData.volunteerRole === "Proof Reading of Books" ||
      formData.volunteerRole === "I can Write Blogs"
        ? formData.volunteerApproach
        : (formData.volunteerApproach = ""),
    messageTo1EQ: formData.messageTo1EQ,

    // part 5
    declarationInfoTrue: formData.declarationInfoTrue,
    declarationInfoAccurate: formData.declarationInfoAccurate,
    consentToContact: formData.consentToContact,
    participateInSurvey: formData.participateInSurvey,
    signatureData: formData.signatureData,
  };

  async function sendData(e) {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    const url = "https://store.1ayq.com/scholarship";
    try {
      setIsSubmitting(true);
      console.log(dataObject);
      await axios.post(url, dataObject);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setError('Faild to submit the form. Please try again later.');
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
              means or you are in any kind of Government Job. Please check
              spelling and Recheck Information. Only the completed applications
              will be considered for the scholarship.
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
              {currentIndex > 0 ? (
                <div className="h-full w-full ">
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
              ) : (
                <div
                  className={`text-white  font-[500] flex items-center justify-center h-full w-full ${
                    tabActiveState === total_states[0]
                      ? "!bg-[#b85a3e]"
                      : "bg-[#e6e7eb]"
                  }  `}
                >
                  1
                </div>
              )}
            </div>

            <span
              className={`text-[16px] status-name  font-[500] ${
                currentIndex >= 0 ? "text-[#0a0a0a]" : "text-[#4a5464]"
              }  `}
            >
              Personal Information
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 0 && "!bg-[#04c951]"
                } ${currentIndex === 0 ? "bg-[#b85a3e]" : "bg-[#e5e7ea]"}`}
              ></div>
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 0 ? "bg-[#04c951]" : "bg-[#e5e7ea]"
                } `}
              ></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              {currentIndex > 1 ? (
                <div className="h-full w-full ">
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
              ) : (
                <div
                  className={`text-white  font-[500] flex items-center justify-center h-full w-full ${
                    tabActiveState === total_states[1]
                      ? "!bg-[#b85a3e]"
                      : "bg-[#e6e7eb]"
                  }  `}
                >
                  2
                </div>
              )}
            </div>

            <span
              className={`text-[16px] status-name  font-[500] ${
                currentIndex >= 1 ? "text-[#0a0a0a]" : "text-[#4a5464]"
              }  `}
            >
              SSC Exam Information
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 1 && "!bg-[#04c951]"
                } ${currentIndex === 1 ? "bg-[#b85a3e]" : "bg-[#e5e7ea]"}`}
              ></div>
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 1 ? "bg-[#04c951]" : "bg-[#e5e7ea]"
                } `}
              ></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              {currentIndex > 2 ? (
                <div className="h-full w-full ">
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
              ) : (
                <div
                  className={`text-white  font-[500] flex items-center justify-center h-full w-full ${
                    tabActiveState === total_states[2]
                      ? "!bg-[#b85a3e]"
                      : "bg-[#e6e7eb]"
                  }  `}
                >
                  3
                </div>
              )}
            </div>

            <span
              className={`text-[16px] status-name  font-[500] ${
                currentIndex >= 2 ? "text-[#0a0a0a]" : "text-[#4a5464]"
              }  `}
            >
              Exam Preperation
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 2 && "!bg-[#04c951]"
                } ${currentIndex === 2 ? "bg-[#b85a3e]" : "bg-[#e5e7ea]"}`}
              ></div>
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 2 ? "bg-[#04c951]" : "bg-[#e5e7ea]"
                } `}
              ></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              {currentIndex > 3 ? (
                <div className="h-full w-full ">
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
              ) : (
                <div
                  className={`text-white  font-[500] flex items-center justify-center h-full w-full ${
                    tabActiveState === total_states[3]
                      ? "!bg-[#b85a3e]"
                      : "bg-[#e6e7eb]"
                  }  `}
                >
                  4
                </div>
              )}
            </div>

            <span
              className={`text-[16px] status-name  font-[500] ${
                currentIndex >= 3 ? "text-[#0a0a0a]" : "text-[#4a5464]"
              }  `}
            >
              Scholarship Details
            </span>

            <div className="w-8 h-[2px] status-bar flex">
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 3 && "!bg-[#04c951]"
                } ${currentIndex === 3 ? "bg-[#b85a3e]" : "bg-[#e5e7ea]"}`}
              ></div>
              <div
                className={`w-1/2 h-full ${
                  currentIndex > 3 ? "bg-[#04c951]" : "bg-[#e5e7ea]"
                } `}
              ></div>
            </div>

            <div className="flex status-number items-center justify-center aspect-square rounded-full overflow-hidden w-7 select-none">
              {currentIndex > 4 ? (
                <div className="h-full w-full ">
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
              ) : (
                <div
                  className={`text-white  font-[500] flex items-center justify-center h-full w-full ${
                    tabActiveState === total_states[4]
                      ? "!bg-[#b85a3e]"
                      : "bg-[#e6e7eb]"
                  }  `}
                >
                  5
                </div>
              )}
            </div>

            <span
              className={`text-[16px] status-name  font-[500] ${
                currentIndex >= 4 ? "text-[#0a0a0a]" : "text-[#4a5464]"
              }  `}
            >
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
                <div className="flex gap-3 items-start">
                  <div className="flex flex-col w-1/2 gap-1">
                    <input
                      type="text"
                      name="first-name"
                      required
                      value={firstName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFirstName(value);
                        setFormError((prev) => ({ ...prev, firstName: value.trim() !== "" ? "" : "First name is required" }));
                      }}
                      className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none ${
                        formError.firstName
                          ? "border-red-500 bg-red-50 border"
                          : "border border-transparent bg-[#f3f3f5]"
                      }`}
                      placeholder="First"
                    />

                    {formError.firstName && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <input
                      type="text"
                      name="last-name"
                      value={lastName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setLastName(value);
                        setFormError((prev) => ({ ...prev, lastName: value.trim() !== "" ? "" : "Last name is required" }));

                      }}
                      required
                      className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                        formError.lastName
                          ? "border-red-500 bg-red-50 border"
                          : "border border-transparent bg-[#f3f3f5]"
                      }`}
                      placeholder="Last"
                    />
                    {formError.lastName && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.lastName}
                      </p>
                    )}
                  </div>
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
                <div
                  className={`flex gap-3 min-h-30 items-center justify-center text-[17px] rounded-xl border  ${
                    formError.passportPhotoFileName
                      ? "border-red-500 bg-red-50"
                      : "border-[#d1d5dd] bg-[#f3f3f5]"
                  }`}
                >
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
                          setFormError((prev) => ({ ...prev, passportPhotoFileName: "Passport photo is required" }));

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
                      setFormError((prev) => ({ ...prev, passportPhotoFileName: file !== "" ? "" : "Passport photo is required" }));

                    }}
                    required
                    className="bg-[#f3f3f5] hidden grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                    placeholder="Select profile image"
                  />
                </div>

                {formError.passportPhotoFileName && (
                  <p className="text-[15px] text-red-500 ">
                    {formError.passportPhotoFileName}
                  </p>
                )}
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
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({ ...formData, gender: value })
                          setFormError((prev) => ({ ...prev, gender: value.trim() !== "" ? "" : "Gender is required" }));

                        }}
                        required
                        className="outline-red-500"
                      />
                      <span className="text-[#0a0a0a]">Male</span>
                    </label>

                    <label className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({ ...formData, gender: "female" })
                          setFormError((prev) => ({ ...prev, gender: value.trim() !== "" ? "" : "Gender is required" }));

                        }}
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
                        onChange={(e) =>{
                          const value = e.target.value;
                          setFormData({ ...formData, gender: "transgender" })
                          setFormError((prev) => ({ ...prev, gender: value.trim() !== "" ? "" : "Gender is required" }));

                        }}
                        required
                      />
                      <span className="text-[#0a0a0a]">Transgender</span>
                    </label>
                  </div>
                  {formError.gender && (
                    <p className="text-[15px] text-red-500 ">
                      {formError.gender}
                    </p>
                  )}
                </div>

                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] text-[#0a0a0a]">
                    Date of Birth (जन्म की तारीख)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>{
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          dateOfBirth: value,
                        })
                        setFormError((prev) => ({ ...prev, dateOfBirth: value.trim() !== "" ? "" : "Date of birth is required" }));

                      }}
                      required
                      name="date-of-birth"
                      className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                        formError.dateOfBirth
                          ? "border-red-500 bg-red-50 border"
                          : "border border-transparent bg-[#f3f3f5]"
                      }`}
                    />
                  </div>
                  {formError.dateOfBirth && (
                    <p className="text-[15px] text-red-500 ">
                      {formError.dateOfBirth}
                    </p>
                  )}
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
                    onChange={(e) =>{
                      const value = e.target.value;
                      setFormData({ ...formData, mobileNumber: value })
                       setFormError((prev) => ({ ...prev, mobileNumber: value.trim() !== "" ? "" : "Mobile number is required" }));

                    }}
                    name="number"
                    placeholder="Enter mobile number"
                    className={`grow-1 px-3 ps-11 py-2 text-[16px] rounded-lg outline-none  ${
                      formError.mobileNumber
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  />
                </div>
                {formError.mobileNumber && (
                  <p className="text-[15px] text-red-500 ">
                    {formError.mobileNumber}
                  </p>
                )}
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
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ ...formData, email: value })
                      setFormError((prev) => ({ ...prev, email: value.trim() !== "" ? "" : "Email is required" }));

                    }}
                    name="email"
                    placeholder="Enter eamil address"
                    className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                      formError.email
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  />
                </div>
                {formError.email && (
                  <p className="text-[15px] text-red-500 ">{formError.email}</p>
                )}
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
                    value={formData.confirmEmail}
                    onChange={(e) =>{
                      const value = e.target.value;
                      setFormData({ ...formData, confirmEmail: value })
                      setFormError((prev) => ({ ...prev, confirmEmail: value.trim() !== "" ? "" : "Confirm Email is required" }));

                    }}
                    name="confirm-email"
                    placeholder="Re-enter eamil address"
                    className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                      formError.confirmEmail
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  />
                </div>
                {formError.confirmEmail && (
                  <p className="text-[15px] text-red-500 ">
                    {formError.confirmEmail}
                  </p>
                )}
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
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ ...formData, addressLine1: value })
                      setFormError((prev) => ({ ...prev, addressLine1: value.trim() !== "" ? "" : "Address line 1 is required" }));

                    }}
                    name="address-1"
                    placeholder="Address Line 1"
                    className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                      formError.addressLine1
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  />
                  {formError.addressLine1 && (
                    <p className="text-[15px] text-red-500 -mt-2">
                      {formError.addressLine1}
                    </p>
                  )}
                  <input
                    type="text"
                    required
                    name="address-2"
                    value={formData.addressLine2}
                    onChange={(e) =>{
                      const value = e.target.value;
                      setFormData({ ...formData, addressLine2: value })
                      setFormError((prev) => ({ ...prev, addressLine2: value.trim() !== "" ? "" : "Address line 2 is required" }));

                    }}
                    placeholder="Address Line 2"
                    className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                      formError.addressLine2
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  />
                  {formError.addressLine2 && (
                    <p className="text-[15px] text-red-500 -mt-2">
                      {formError.addressLine2}
                    </p>
                  )}
                  <div className="flex gap-3 items-start">
                    <div className="flex flex-col w-full gap-1">
                      <input
                        type="text"
                        required
                        name="city"
                        value={formData.city}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({ ...formData, city: value })
                          setFormError((prev) => ({ ...prev, city: value.trim() !== "" ? "" : "City is required" }));

                        }}
                        placeholder="City"
                        className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                          formError.city
                            ? "border-red-500 bg-red-50 border"
                            : "border border-transparent bg-[#f3f3f5]"
                        }`}
                      />
                      {formError.city && (
                        <p className="text-[15px] text-red-500 ">
                          {formError.city}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col w-full gap-1">
                      <input
                        type="number"
                        required
                        name="zip-code"
                        value={formData.pincode}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({ ...formData, pincode: value })
                          setFormError((prev) => ({ ...prev, pincode: value.trim() !== "" ? "" : "Pincode is required" }));

                        }}
                        placeholder="Postal / Zip Code"
                        className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                          formError.pincode
                            ? "border-red-500 bg-red-50 border"
                            : "border border-transparent bg-[#f3f3f5]"
                        }`}
                      />
                      {formError.pincode && (
                        <p className="text-[15px] text-red-500 ">
                          {formError.pincode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* state & confirm postal code */}
              <div className="flex gap-3 justify-between items-start pb-8 border-b border-[#e8e8e8]">
                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                    State / UT (राज्य/केंद्र शासित प्रदेश)
                  </label>

                  <select
                    required
                    name="state"
                    value={formData.stateUT}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({ ...formData, stateUT: value })
                      setFormError((prev) => ({ ...prev, stateUT: value.trim() !== "" ? "" : "State UT is required" }));
                    }}
                    className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.stateUT
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    {indianRegions.map((elem, index) => {
                      return (
                        <option key={index} value={elem.toLowerCase()}>
                          {elem}
                        </option>
                      );
                    })}
                  </select>
                  {formError.stateUT && (
                    <p className="text-[15px] text-red-500 ">
                      {formError.stateUT}
                    </p>
                  )}
                </div>

                <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                  <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                    Re-Enter Pincode (पिनकोड दोबारा दर्ज करें)
                  </label>
                  <input
                    type="text"
                    required
                    name="zip-code"
                    value={formData.confirmPincode}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({
                        ...formData,
                        confirmPincode: e.target.value,
                      })
                      setFormError((prev) => ({ ...prev, confirmPincode: value.trim() !== "" ? "" : "Confirm Pincode is required" }));
                    }}
                    placeholder="Re-enter Postal / Zip Code"
                    className={`grow-1 px-3 py-2 text-[16px] rounded-lg outline-none  ${
                      formError.confirmPincode
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}
                  />
                  {formError.confirmPincode && (
                    <p className="text-[15px] text-red-500 ">
                      {formError.confirmPincode}
                    </p>
                  )}
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
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          isBenchmarkDisability: value,
                        })
                        setFormError((prev) => ({ ...prev, isBenchmarkDisability: value.trim() !== "" ? "" : "Benchmark with Disability is required" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">Yes</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      checked={formData.isBenchmarkDisability === "no"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          isBenchmarkDisability: value,
                        })
                        setFormError((prev) => ({ ...prev, isBenchmarkDisability: value.trim() !== "" ? "" : "Benchmark with Disability is required" }));
                      }}
                      type="radio"
                      name="disability"
                      value="no"
                      required
                    />
                    <span className="text-[#0a0a0a]">No</span>
                  </label>
                </div>
                {formError.isBenchmarkDisability && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.isBenchmarkDisability}
                      </p>
                    )}
              </div>

              {/* show when disability type is yes */}

              {formData.isBenchmarkDisability === "yes" ? (
                <>
                  {/* disability type */}
                  <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                    <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                      Type of Disability (विकलांगता का प्रकार)
                    </label>

                    <select
                      required
                      name="disability-type"
                      value={formData.disabilityType}
                      onChange={(e) =>{
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          disabilityType: value,
                        })
                        setFormError((prev) => ({ ...prev, disabilityType: value.trim() !== "" ? "" : "Disability type is required" }));
                      }}   
                    className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.disabilityType
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}  >
                      <option value="" disabled>
                        -- Select --
                      </option>
                      {disabilityType.map((elem, index) => (
                        <option key={index} value={elem}>
                          {elem}
                        </option>
                      ))}
                    </select>
                    {formError.disabilityType && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.disabilityType}
                      </p>
                    )}
                  </div>

                  {/* category */}
                  <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                    <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                      Your Category (आपकी श्रेणी)
                    </label>

                    <select
                      required
                      name="disability-type"
                      value={formData.category}
                      onChange={(e) => {
                      const value = e.target.value;
                        setFormData({ ...formData, category: value })
                        setFormError((prev) => ({ ...prev, category: value.trim() !== "" ? "" : "Category is required" }));
                      }
                      }
                      className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.category
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}  >
                      <option value="" disabled>
                        Select Your Category (अपनी श्रेणी का चयन करें)
                      </option>
                      {casteCategory.map((elem, index) => {
                        return (
                          <option key={index} value={elem}>
                            {elem}
                          </option>
                        );
                      })}
                    </select>
                       {formError.category && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.category}
                      </p>
                    )}
                  </div>

                  {/* disability certificate  */}
                  <div className="w-full flex flex-col form-field gap-1">
                    <label
                      className="text-[17px] text-[#0a0a0a]"
                      htmlFor="select-disability-certificate"
                    >
                      Upload Your Disability Certificate (अपना विकलांगता
                      प्रमाणपत्र अपलोड करें)
                    </label>
                    <div
                    className={`flex gap-3 min-h-30 items-center justify-center text-[17px] rounded-xl border  ${
                    formError.disabilityCertificateFileName
                      ? "border-red-500 bg-red-50"
                      : "border-[#d1d5dd] bg-[#f3f3f5]"
                     }`}                     >
                      {formData.disabilityCertificateFileName ? (
                        <div className="h-[90%] select-none w-max max-w-[80px] border relative  rounded-md">
                          <img
                            src={formData.disabilityCertificateFileName}
                            className="h-full w-full object-contain rounded-md"
                            alt=""
                          />
                          <span
                            onClick={() => {
                              URL.revokeObjectURL(
                                formData.disabilityCertificateFileName
                              );
                              setFormData({
                                ...formData,
                                disabilityCertificateFileName: "",
                              });
                               setFormError((prev) => ({ ...prev, disabilityCertificateFileName: "Disability certificate is required" }));

                            }}
                            className="cursor-pointer text-[15px] p-1 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-red-100 text-red-500 rounded-full flex items-center justify-center w-[10px] h-[22px] shrink-0 aspect-square "
                          >
                            <RxCross2 />
                          </span>
                        </div>
                      ) : (
                        <div className="flex gap-2 items-center">
                          <label
                            htmlFor="disability-certificate-image"
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
                        id="disability-certificate-image"
                        name="profile-image"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setFormData({
                              ...formData,
                              disabilityCertificateFileName:
                                URL.createObjectURL(file),
                            });
                          }
                          setFormError((prev) => ({ ...prev, disabilityCertificateFileName: file !== "" ? "" : "Passport photo is required" }));

                        }}
                        required
                        className="bg-[#f3f3f5] hidden grow-1 px-3 py-2 text-[16px] text-black outline-none border-none rounded-lg"
                        placeholder="Select profile image"
                      />
                    </div>
                       {formError.disabilityCertificateFileName && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.disabilityCertificateFileName}
                      </p>
                    )}
                    <p className="text-[14px] text-[#6b7281] mt-2">
                      Upload your picture as per SSC Specifications (एसएससी
                      विनिर्देशों के अनुसार अपनी तस्वीर अपलोड करें)
                    </p>
                  </div>

                  {/* family income */}
                  <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                    <label className="text-[17px] text-[#0a0a0a]">
                      Your Family Income (आपकी पारिवारिक आय)
                    </label>

                      <select
                        required
                        value={formData.familyIncome}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({
                            ...formData,
                            familyIncome: value,
                          })
                          setFormError((prev) => ({ ...prev, familyIncome: value.trim() !== "" ? "" : "Family income is required" }));
                        }}
                        name="family income"
                       className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.familyIncome
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}                       >
                        <option value="" disabled>
                          Select Income
                        </option>
                        <option value="Below 2.4 Lacks">Below 5 Lacks</option>
                        <option value="Between 2.4 - 5 Lacks">
                          Between 2.4 - 5 Lacks
                        </option>
                        <option value="Above 5 Lacks">Above 5 Lacks</option>
                      </select>
                      {formError.familyIncome && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.familyIncome}
                      </p>
                    )}
                  </div>

                  {/* currently working  */}
                  <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                    <label className="text-[17px] text-[#0a0a0a]">
                      Are you Presently Working? (क्या आप वर्तमान में कार्यरत
                      हैं?)
                    </label>
                      <select
                        required
                        value={formData.isCurrentlyWorking}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({
                            ...formData,
                            isCurrentlyWorking: value,
                          })
                          setFormError((prev) => ({ ...prev, isCurrentlyWorking: value.trim() !== "" ? "" : "Currently working is required" }));
                        }}
                        name="currently working"
                       className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.isCurrentlyWorking
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}      >
                        <option value="" disabled>
                          Presently Working
                        </option>
                        <option value="In Government Job (Full time)">
                          In Government Job (Full time)
                        </option>
                        <option value="In Private Job (Full time)">
                          In Private Job (Full time)
                        </option>
                        <option value="In Part Time Job / Freelancer">
                          In Part Time Job / Freelancer
                        </option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Still-Studying">Still-Studying</option>
                      </select>
                       {formError.isCurrentlyWorking && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.isCurrentlyWorking}
                      </p>
                      )}
                  </div>

                  {/* scholarship program referral */}
                  <div className="w-full flex flex-col form-field gap-1 text-[17px] pb-8 border-b border-[#e8e8e8]">
                    <label className="text-[17px] text-[#0a0a0a]">
                      How did you learn about this Scholarship Program? (आपको इस
                      छात्रवृत्ति कार्यक्रम के बारे में कैसे पता चला?)
                    </label>

                      <select
                        required
                        value={formData.scholarshipSourceInfo}
                        onChange={(e) =>{
                          const value = e.target.value;
                          setFormData({
                            ...formData,
                            scholarshipSourceInfo: value,
                          })
                          setFormError((prev) => ({ ...prev, scholarshipSourceInfo: value.trim() !== "" ? "" : "Scholarship source is required" }));
                        }}
                        name="scholarship program referral"
                        className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.scholarshipSourceInfo
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}    >
                        <option value="" disabled>
                          Select where you learn about this Scholarship Program
                        </option>
                        <option value="1EQ Telegram">1EQ Telegram</option>
                        <option value="1PYQ App">1PYQ App</option>
                        <option value="1EQ Website">1EQ Website</option>
                        <option value="From Friend">From Friend</option>
                        <option value="From News Papers">
                          From News Papers
                        </option>
                        <option value="From Social Media">
                          From Social Media
                        </option>
                      </select>
                      {formError.scholarshipSourceInfo && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.scholarshipSourceInfo}
                      </p>
                      )}
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

                      <select
                        required
                        value={formData.tenthStudyMedium}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData({
                            ...formData,
                            tenthStudyMedium: value,
                          })
                          setFormError((prev) => ({ ...prev, tenthStudyMedium: value.trim() !== "" ? "" : "10th study medium is required" }));
                        }}
                        name="10th study medium"
                        className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.tenthStudyMedium
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}                      >
                        <option value="" disabled>
                          Select Medium
                        </option>
                        {studyMedium.map((elem, index) => {
                          return (
                            <option value={elem} key={index}>
                              {elem}
                            </option>
                          );
                        })}
                      </select>
                      {formError.tenthStudyMedium && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.tenthStudyMedium}
                      </p>
                      )}
                    </div>

                    <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                      <label className="text-[17px] leading-[19px] text-[#0a0a0a]">
                        12th - Study Medium (12वीं - अध्ययन माध्यम)
                      </label>
                      <select
                        required
                        value={formData.twelfthStudyMedium}
                        onChange={(e) =>{
                          const value = e.target.value;
                          setFormData({
                            ...formData,
                            twelfthStudyMedium: value,
                          })
                          setFormError((prev) => ({ ...prev, twelfthStudyMedium: value.trim() !== "" ? "" : "12th study medium is required" }));
                        }}
                        name="12th study medium"
                        className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.twelfthStudyMedium
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}                       >
                        <option value="" disabled>
                          Select Medium
                        </option>
                        {studyMedium.map((elem, index) => {
                          return (
                            <option value={elem} key={index}>
                              {elem}
                            </option>
                          );
                        })}
                      </select>
                      {formError.twelfthStudyMedium && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.twelfthStudyMedium}
                      </p>
                      )}
                    </div>
                  </div>

                  {/* education qualification level  */}
                  <div className="w-full flex flex-col form-field gap-1">
                    <label className="text-[17px] text-[#0a0a0a]">
                      Level of Education Qualification (शिक्षा योग्यता का स्तर)
                    </label>

                    <select
                      required
                      name="education-level"
                      value={formData.educationLevel}
                      onChange={(e) =>{
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          educationLevel: value,
                        })
                        setFormError((prev) => ({ ...prev, educationLevel: value.trim() !== "" ? "" : "Education qualification is required" }));
                      }}
                      className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.educationLevel
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}                     >
                      <option value="" disabled>
                        -- Select --
                      </option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="graduation">Graduation</option>
                      <option value="post graduation">Post Graduation</option>
                      <option value="phd">PHD</option>
                    </select>
                     {formError.educationLevel && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.educationLevel}
                      </p>
                      )}
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
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          currentlyStudying: value,
                        })
                        setFormError((prev) => ({ ...prev, currentlyStudying: value.trim() !== "" ? "" : "Currently studying is required" }));
                      }}
                       className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.currentlyStudying
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}    >
                      <option value="" disabled>
                        -- Select --
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                     {formError.currentlyStudying && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.currentlyStudying}
                      </p>
                      )}
                  </div>

                  {/* currently education medium  */}
                  <div className="w-full flex flex-col form-field gap-1">
                    <label className="text-[17px] text-[#0a0a0a]">
                      Current Education Medium (वर्तमान शिक्षा माध्यम)
                    </label>

                    <select
                      required
                      value={formData.currentEducationMedium}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          currentEducationMedium: value,
                        })
                        setFormError((prev) => ({ ...prev, currentEducationMedium: value.trim() !== "" ? "" : "Current education medium is required" }));
                      }}
                      name="current-education-medium"
                       className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                        formError.currentEducationMedium
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                        }`}                     >
                      <option value="" disabled>
                        -- Select --
                      </option>
                      {studyMedium.map((elem, index) => {
                        return (
                          <option value={elem} key={index}>
                            {elem}
                          </option>
                        );
                      })}
                    </select>
                    {formError.currentEducationMedium && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.currentEducationMedium}
                      </p>
                      )}
                  </div>
                </>
              ) : null}

              {formData.isBenchmarkDisability === "no" && (
                <p className="text-[20px] font-[600] leading-[24px]">
                  This application form is exclusively for individuals in the
                  People with Disabilites (PWD) category. Please use the
                  following link to apply in your respective category. (यह आवेदन
                  पत्र केवल PWD श्रेणी के लिए है। कृपया अपनी श्रेणी में आवेदन
                  करने के लिए निम्नलिखित लिंक पर क्लिक करें।)
                </p>
              )}
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
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      eligibleForCGL2025: value,
                    })
                    setFormError((prev) => ({ ...prev, eligibleForCGL2025: value.trim() !== "" ? "" : "Eligible for CGL 2025 is required" }));
                  }}
                className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                formError.eligibleForCGL2025
                ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`}                  >
                  <option value="" disabled>
                    -- Select --
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {formError.eligibleForCGL2025&& (
                      <p className="text-[15px] text-red-500 ">
                        {formError.eligibleForCGL2025}
                      </p>
                )}
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
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      preparingForCGL2025: value,
                    })
                    setFormError((prev) => ({ ...prev, preparingForCGL2025: value.trim() !== "" ? "" : "Preparing for CGL 2025 is required" }));

                  }}
                  className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                formError.preparingForCGL2025
                ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`} 
                >
                  <option value="" disabled>
                    -- Select --
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No, Preparing for other exam</option>
                </select>
                 {formError.preparingForCGL2025 && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.preparingForCGL2025}
                      </p>
                )}
              </div>

              {/* which attempt  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  CGL 2025 will be your / सीजीएल 2025 आपका होगा (कौन सा प्रयास?)
                </label>

                <select
                  required
                  value={formData.cgl2025Attempt}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({ ...formData, cgl2025Attempt: e.target.value })
                    setFormError((prev) => ({ ...prev, cgl2025Attempt: value.trim() !== "" ? "" : "Attempt for CGL 2025 is required" }));

                  }}
                  name="cgl-attempt-no"
                className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                formError.cgl2025Attempt
                ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`}  >
                  <option value="" disabled>
                    -- Which attempt? --
                  </option>
                  <option value="1">1st Attempt</option>
                  <option value="2">2nd Attempt</option>
                  <option value="3">3rd Attempt</option>
                  <option value="4">4th Attempt</option>
                  <option value="5">5th Attempt</option>
                  <option value="6">6th Attempt</option>
                  <option value="7">7th Attempt</option>
                  <option value="8">8th Attempt</option>
                  <option value="last">Last Attempt</option>
                </select>
                {formError.cgl2025Attempt && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.cgl2025Attempt}
                </p>
                )}
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
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      clearedOtherGovtExams: value,
                    })
                    setFormError((prev) => ({ ...prev, clearedOtherGovtExams: value.trim() !== "" ? "" : "Cleared other exams is required" }));
                  }}
                  placeholder="Cleared any government exam?"
                className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                formError.clearedOtherGovtExams
                ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`}  >
                    
                  </textarea>
                 {formError.clearedOtherGovtExams && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.clearedOtherGovtExams}
                </p>
                )}
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
                  How are You Preparing for the Exam? (आप परीक्षा की तैयारी कैसे
                  कर रहे हैं?)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Self Study"
                      checked={formData.preparationMethod.includes(
                        "Self Study"
                      )}
                      onChange={formData.handlePreparationChange}
                      required
                      name="self-study"
                    />
                    <span>Self Study / स्वयं अध्ययन</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      required
                      value="Coaching Center"
                      checked={formData.preparationMethod.includes(
                        "Coaching Center"
                      )}
                      onChange={formData.handlePreparationChange}
                      name="preparation-source"
                    />
                    <span>Coaching Center / कोचिंग सेंटर</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      required
                      value="Online Paid Course"
                      checked={formData.preparationMethod.includes(
                        "Online Paid Course"
                      )}
                      onChange={formData.handlePreparationChange}
                      name="preparation-source"
                    />
                    <span>Online Paid Courses / ऑनलाइन भुगतान पाठ्यक्रम</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      required
                      value="Online (Youtube) / Free Course"
                      checked={formData.preparationMethod.includes(
                        "Online (Youtube) / Free Course"
                      )}
                      onChange={formData.handlePreparationChange}
                      name="preparation-source"
                    />
                    <span>
                      Online (You Tube) / Free Courses - ऑनलाइन (यूट्यूब) /
                      नि:शुल्क पाठ्यक्रम
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.preperationMethodOthers}
                      onChange={(e) => { 
                        const value = e.target.checked
                        if (!value) {
                          setFormData({
                            ...formData,
                            preparationMethodOther: "",
                          });
                        }
                      }}
                      name="preparation-source"
                    />
                    <input
                      type="text"
                      value={formData.preperationMethodOthers}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          preperationMethodOthers: value,
                        })
                       setFormError((prev) => ({ ...prev, preparationMethod: value !== "" ? "" : "Preperation method is required" }));

                      }}
                      placeholder="Other"
                      className="bg-[#f3f3f5] px-3 py-2 text-[17px] text-black outline-none border-none rounded-lg"
                    />
                  </label>
                   {formError.preparationMethod && (
                      <p className="text-[15px] text-red-500 -mt-2">
                        {formError.preparationMethod}
                     </p>
                   )}
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
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({ ...formData, practiceMethod: value })
                    setFormError((prev) => ({ ...prev, practiceMethod: value.trim() !== "" ? "" : "Practice method is required" }));

                  }}
                    className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.practiceMethod
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}   >
                  <option value="" disabled>
                    -- Select --
                  </option>
                  <option value="free mock">Free Mock</option>
                  <option value="paid mock">Paid Mock</option>
                </select>
                {formError.practiceMethod && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.practiceMethod}
                </p>
                )}
              </div>

              {/* part of study group  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Are you Part of a Study Group? (क्या आप किसी अध्ययन समूह का
                  हिस्सा हैं?)
                </label>

                <select
                  required
                  name="cgl-attempt-no"
                  value={formData.isPartOfStudyGroup}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      isPartOfStudyGroup: value,
                    })
                    setFormError((prev) => ({ ...prev, isPartOfStudyGroup: value.trim() !== "" ? "" : "Study Group is required" }));

                  }}
                  className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.isPartOfStudyGroup
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                  }`}
                >
                  <option value="" disabled>
                    -- Select Group --
                  </option>
                  <option value="telegram group (paid)">Telegram Group (Paid)</option>
                  <option value="telegram group (free)">Telegram Group (Free)</option>
                  <option value="whatsapp group">WhatsApp Group</option>
                  <option value="library group">Library Group</option>
                  <option value="friends group">Friends Group</option>
                </select>
                 {formError.isPartOfStudyGroup && (
                      <p className="text-[15px] text-red-500 ">
                        {formError.isPartOfStudyGroup}
                </p>
                )}
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
                    <input
                      type="radio"
                      name="mobile-phone"
                      value={"smart-phone"}
                      checked={formData.hasMobile === "smart-phone"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasMobile: value,
                        })
                        setFormError((prev) => ({ ...prev, hasMobile: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">
                      Smart Phone / स्मार्टफोन
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="mobile-phone"
                      value={"keypad-phone"}
                      checked={formData.hasMobile === "keypad-phone"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasMobile: value,
                        })
                        setFormError((prev) => ({ ...prev, hasMobile: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                    />
                    <span className="text-[#0a0a0a]">
                      Keypad Mobile / कीपैड मोबाइल
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="mobile-phone"
                      value={"none"}
                      checked={formData.hasMobile === "none"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasMobile: value,
                        })
                        setFormError((prev) => ({ ...prev, hasMobile: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">None / कोई नहीं</span>
                  </label>
                </div>
                 {formError.hasMobile && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.hasMobile}
                </p>
                )}
              </div>

              {/* tablet  */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Tablet (टैबलेट)
                </label>
                <div className="flex gap-5">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="tablet-device"
                      value={"android"}
                      checked={formData.hasTablet === "android"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasTablet: value,
                        })
                        setFormError((prev) => ({ ...prev, hasTablet: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">Android / एंड्रॉइड</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="tablet-device"
                      value={"ipad"}
                      checked={formData.hasTablet === "ipad"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasTablet: value,
                        })
                        setFormError((prev) => ({ ...prev, hasTablet: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">iPad</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="tablet-device"
                      value={"none"}
                      checked={formData.hasTablet === "none"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasTablet: value,
                        })
                        setFormError((prev) => ({ ...prev, hasTablet: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">None / कोई नहीं</span>
                  </label>
                </div>
                {formError.hasTablet && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.hasTablet}
                </p>
                )}
              </div>

              {/* computer  */}
              <div className="w-full flex flex-col form-field gap-1 text-[17px]">
                <label className="text-[17px] text-[#0a0a0a]">
                  Computer (कंप्यूटर)
                </label>
                <div className="flex gap-5">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="computer-device"
                      value={"laptop"}
                      checked={formData.hasComputer === "laptop"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasComputer: value,
                        })
                        setFormError((prev) => ({ ...prev, hasComputer: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">Laptop / लैपटॉप</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="computer-device"
                      value={"desktop"}
                      checked={formData.hasComputer === "desktop"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasComputer: value,
                        })
                        setFormError((prev) => ({ ...prev, hasComputer: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">Desktop / डेस्कटॉप</span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="computer-device"
                      value={"none"}
                      checked={formData.hasComputer === "none"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          hasComputer: value,
                        })
                        setFormError((prev) => ({ ...prev, hasComputer: value.trim() !== "" ? "" : "Select any device" }));
                      }}
                      required
                    />
                    <span className="text-[#0a0a0a]">None / कोई नहीं</span>
                  </label>
                </div>
                {formError.hasComputer && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.hasComputer}
                </p>
                )}
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
                  value={formData.receivedPreviousScholarship}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      receivedPreviousScholarship: value,
                    })
                    setFormError((prev) => ({ ...prev, receivedPreviousScholarship: value.trim() !== "" ? "" : "Previous scholarship is required" }));

                  }}
                    className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.receivedPreviousScholarship
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}                >
                  <option value="" disabled>
                    -- Select --
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {formError.receivedPreviousScholarship && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.receivedPreviousScholarship}
                </p>
                )}
              </div>

              {/* previous scholarship  details from 1 eq  */}
              {formData.receivedPreviousScholarship === "yes" && (
                <div className="w-full flex flex-col form-field gap-1">
                  <label className="text-[17px] text-[#0a0a0a]">
                    Which one? (कौन सा?)
                  </label>

                  <select
                    required
                    name="previous-scholarship-name"
                    value={formData.previousScholarshipDetails}
                    onChange={(e) => {
                      const value = e.target.value
                      setFormData({
                        ...formData,
                        previousScholarshipDetails: value,
                      })
                    setFormError((prev) => ({ ...prev, previousScholarshipDetails: value.trim() !== "" ? "" : "Which scholarship is required" }));
                    }}
                      className={`custom-dropdown text-black grow-1 px-3 py-2 text-[17px] rounded-lg outline-none  ${
                      formError.previousScholarshipDetails
                        ? "border-red-500 bg-red-50 border"
                        : "border border-transparent bg-[#f3f3f5]"
                    }`}                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bronze">Bronze</option>
                  </select>
                  {formError.previousScholarshipDetails && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.previousScholarshipDetails}
                </p>
                )}
                </div>
              )}

              {/* which scholarship needed  */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Which Scholarship do you need? (आपको कौन सी छात्रवृत्ति की
                  आवश्यकता है?)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"gold"}
                      checked={formData.scholarshipNeeded === "gold"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          scholarshipNeeded:value,
                        })
                        setFormError((prev) => ({ ...prev, scholarshipNeeded: value.trim() !== "" ? "" : "Select which scholarship is needed" }));
                      }}
                      required
                      name="scholarship-selection"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">Gold</span>
                      <i>
                        Gold: 1EQ Complete Book Set + Digital Kit + Study Group
                      </i>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"silver"}
                      checked={formData.scholarshipNeeded === "silver"}
                      onChange={(e) => {
                        const value = e.target.value
                        setFormData({
                          ...formData,
                          scholarshipNeeded: value,
                        })
                        setFormError((prev) => ({ ...prev, scholarshipNeeded: value.trim() !== "" ? "" : "Select which scholarship is needed" }));

                      }}
                      required
                      name="scholarship-selection"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">Silver</span>
                      <i>
                        Silver: 1EQ Basic Book Set + Digital Kit + Study Group
                      </i>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"bronze"}
                      checked={formData.scholarshipNeeded === "bronze"}
                      onChange={(e) => {
                        const value = e.target.value
                        setFormData({
                          ...formData,
                          scholarshipNeeded: value,
                        })
                        setFormError((prev) => ({ ...prev, scholarshipNeeded: value.trim() !== "" ? "" : "Select which scholarship is needed" }));
                      }}
                      required
                      name="scholarship-selection"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">Bronze</span>
                      <i>Bronze: 1EQ Digital Kit + Study Group</i>
                    </p>
                  </label>
                </div>
                {formError.scholarshipNeeded && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.scholarshipNeeded}
                </p>
                )}
              </div>

              {/* scholarship reason describe */}
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
                  value={formData.scholarshipEssay}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      scholarshipEssay: value,
                    })
                    setFormError((prev) => ({ ...prev, scholarshipEssay: value.trim() !== "" ? "" : "Please describe why you needed" }));

                  }}
                  placeholder="Please make sure that there are no Grammar or Spelling Mistakes (कृपया सुनिश्चित करें कि कोई व्याकरण या वर्तनी की गलतियाँ न हों)"
                  className={` text-black grow-1 h-[120px] px-3 py-2 text-[17px] rounded-lg resize-none outline-none  ${
                  formError.scholarshipEssay
                  ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`}                 ></textarea>
                {formError.scholarshipEssay && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.scholarshipEssay}
                </p>
                )}
              </div>

              {/* volunteering role */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a]">
                  Would you like to volunteer with 1EQ? (क्या आप 1EQ के साथ
                  स्वयंसेवक बनना चाहेंगे?)
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"Telegram Group Admin"}
                      checked={
                        formData.volunteerRole === "Telegram Group Admin"
                      }
                      onChange={(e) => {
                        const value = e.target.value
                        setFormData({
                          ...formData,
                          volunteerRole: value,
                        })
                        setFormError((prev) => ({ ...prev, volunteerRole: value.trim() !== "" ? "" : "Select volunteer role" }));

                      }}
                      required
                      name="volunteer-role"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">
                        Telegram Group Admin /​ टेलीग्राम ग्रुप एडमिन
                      </span>
                    </p>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"Recording Lessons in Indian Sign Language (ISL)"}
                      checked={
                        formData.volunteerRole ===
                        "Recording Lessons in Indian Sign Language (ISL)"
                      }
                      onChange={(e) => {
                        const value = e.target.value
                        setFormData({
                          ...formData,
                          volunteerRole: value,
                        })
                       setFormError((prev) => ({ ...prev, volunteerRole: value.trim() !== "" ? "" : "Select volunteer role" }));

                      }}
                      required
                      name="volunteer-role"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">
                        Recording Lessons in Indian Sign Language (ISL) /​
                        भारतीय सांकेतिक भाषा (आईएसएल) में पाठों की रिकॉर्डिंग
                      </span>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"Doubt Solving"}
                      checked={formData.volunteerRole === "Doubt Solving"}
                      onChange={(e) => {
                        const value = e.target.value
                        setFormData({
                          ...formData,
                          volunteerRole:value,
                        })
                        setFormError((prev) => ({ ...prev, volunteerRole: value.trim() !== "" ? "" : "Select volunteer role" }));
                      }}
                      required
                      name="volunteer-role"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">
                        Doubt Solving /​ शंका समाधान
                      </span>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"Proof Reading of Books"}
                      checked={
                        formData.volunteerRole === "Proof Reading of Books"
                      }
                      onChange={(e) => {
                        const value = e.target.value
                        setFormData({
                          ...formData,
                          volunteerRole: value,
                        })
                        setFormError((prev) => ({ ...prev, volunteerRole: value.trim() !== "" ? "" : "Select volunteer role" }));

                      }}
                      required
                      name="volunteer-role"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">
                        Proof Reading of Books /​ पुस्तकों की प्रूफ़ रीडिंग
                      </span>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"I can Write Blogs"}
                      checked={formData.volunteerRole === "I can Write Blogs"}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          volunteerRole: value,
                        })
                        setFormError((prev) => ({ ...prev, volunteerRole: value.trim() !== "" ? "" : "Select volunteer role" }));

                      }}
                      required
                      name="volunteer-role"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">
                        I can Write Blogs /​ मैं ब्लॉग लिख सकता हूँ
                      </span>
                    </p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={"I don't want to Volunteer"}
                      checked={
                        formData.volunteerRole === "I don't want to Volunteer"
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData({
                          ...formData,
                          volunteerRole: value,
                        })
                        setFormError((prev) => ({ ...prev, volunteerRole: value.trim() !== "" ? "" : "Select volunteer role" }));

                      }}
                      required
                      name="volunteer-role"
                    />
                    <p className="text-[#4a5565] flex flex-col">
                      <span className="text-[#0a0a0a]">
                        I don't want to Volunteer /​ मैं स्वयंसेवक नहीं बनना
                        चाहता
                      </span>
                    </p>
                  </label>
                </div>
                {formError.volunteerRole && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.volunteerRole}
                </p>
                )}
              </div>

              {/* approach to volunteering */}
              {(formData.volunteerRole === "Telegram Group Admin" ||
                formData.volunteerRole ===
                  "Recording Lessons in Indian Sign Language (ISL)" ||
                formData.volunteerRole === "Doubt Solving" ||
                formData.volunteerRole === "Proof Reading of Books" ||
                formData.volunteerRole === "I can Write Blogs") && (
                <div className="w-full flex flex-col form-field gap-1">
                  <label className="text-[17px] text-[#0a0a0a] w-full">
                    Can you describe your approch to volunteering? (क्या आप
                    स्वयंसेवा के प्रति अपने दृष्टिकोण का वर्णन कर सकते हैं?)
                  </label>

                  <textarea
                    name="volunteering-approach"
                    required
                    value={formData.volunteerApproach}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({
                        ...formData,
                        volunteerApproach:value,
                      })
                       setFormError((prev) => ({ ...prev, volunteerApproach: value.trim() !== "" ? "" : "Write your volunteer approach" }));

                    }}
                    placeholder="Write your approach"
                className={` text-black grow-1 h-[120px] px-3 py-2 text-[17px] rounded-lg resize-none outline-none  ${
                formError.volunteerApproach
                ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`}                   ></textarea>
                  {formError.volunteerApproach && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.volunteerApproach}
                </p>
                )}
                </div>
              )}

              {/* message to 1EQ */}
              <div className="w-full flex flex-col form-field gap-1">
                <label className="text-[17px] text-[#0a0a0a] w-full">
                  Do you have a message for 1EQ or its Founder (JT)? क्या आपके
                  पास 1EQ या इसके संस्थापक (JT) के लिए कोई संदेश है?
                </label>

                <textarea
                  name="scholarship-reason"
                  required
                  value={formData.messageTo1EQ}
                  onChange={(e) => {
                    const value = e.target.value
                    setFormData({
                      ...formData,
                      messageTo1EQ: value,
                    })
                    setFormError((prev) => ({ ...prev, messageTo1EQ: value.trim() !== "" ? "" : "This field is required" }));

                  }}
                  placeholder="Write a message"
                  className={` text-black grow-1 h-[120px] px-3 py-2 text-[17px] rounded-lg resize-none outline-none  ${
                formError.messageTo1EQ
                ? "border-red-500 bg-red-50 border"
                  : "border border-transparent bg-[#f3f3f5]"
                  }`}                ></textarea>
                {formError.messageTo1EQ && (
                      <p className="text-[15px] text-red-500 -mt-1">
                        {formError.messageTo1EQ}
                </p>
                )}
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
                    <input
                      type="checkbox"
                      required
                      checked={formData.declarationInfoTrue}
                      onChange={(e) => {
                        const value = e.target.checked;
                        setFormData({
                          ...formData,
                          declarationInfoTrue: value,
                        })
                        setFormError((prev) => ({ ...prev, declarationInfoTrue: !value && "PLease check this field" }));

                      }}
                    />
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                  {formError.declarationInfoTrue && (
                      <p className="text-[15px] text-red-500 -mt-2">
                        {formError.declarationInfoTrue}
                     </p>
                    )}
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
                    <input
                      type="checkbox"
                      required
                      checked={formData.declarationInfoAccurate}
                      onChange={(e) => {
                        const value = e.target.checked;
                        setFormData({
                          ...formData,
                          declarationInfoAccurate: value,
                        })
                        setFormError((prev) => ({ ...prev, declarationInfoAccurate: !value && "PLease check this field" }));
                      }}
                    />
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                {formError.declarationInfoAccurate && (
                      <p className="text-[15px] text-red-500 -mt-2">
                        {formError.declarationInfoAccurate}
                </p>
                )}
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
                    <input
                      type="checkbox"
                      required
                      checked={formData.consentToContact}
                      onChange={(e) => {
                        const value = e.target.checked;
                        setFormData({
                          ...formData,
                          consentToContact:value,
                        })
                        setFormError((prev) => ({ ...prev, consentToContact: !value && "PLease check this field" }));
                      }}
                    />
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                {formError.consentToContact && (
                      <p className="text-[15px] text-red-500 -mt-2">
                        {formError.consentToContact}
                </p>
                )}
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
                    <input
                      type="checkbox"
                      required
                      checked={formData.participateInSurvey}
                      onChange={(e) => {
                        const value = e.target.checked;
                        setFormData({
                          ...formData,
                          participateInSurvey: value,
                        })
                        setFormError((prev) => ({ ...prev, participateInSurvey: !value && "PLease check this field" }));
                      }}
                    />
                    <span>I Agree (मैं सहमत हूं)</span>
                  </label>
                  {formError.participateInSurvey && (
                      <p className="text-[15px] text-red-500 -mt-2">
                        {formError.participateInSurvey}
                    </p>
                  )}
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
                className={` outline-none w-28 border-none bg-[#00254e] text-white font-[500] flex items-center justify-center gap-2 py-2 px-4 cursor-pointer rounded-md`}
              >
                {
                  isSubmitting ? <ImSpinner9 className="text-white text-[16px] animate-spin" /> : (
                    <>
                   Submit
                  <FaArrowRight />
                    </>
                  )
                }

              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextPage}
                className={` outline-none w-28 border-none bg-[#00254e] text-white font-[500] flex items-center justify-center gap-2 py-2 px-4 cursor-pointer rounded-md`}
              >
                Next
                <FaArrowRight />
              </button>
            )}
            {error && <p className="text-red-500 flex items-center">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ScholarshipForm;
