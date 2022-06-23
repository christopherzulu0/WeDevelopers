/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Script from "next/script";
export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>

      <div className="bg-light text-gray-100 px-8 py-12 ">
        <h2 className="pb-10 text-4xl lg:text-5xl font-bold leading-tight text-center ">
          Contact Us
        </h2>
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg ">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>
            <div
              className="mt-8 text-center ml-15"
              style={{ marginLeft: "-40%" }}
            >
              <lottie-player
                id="contact-svg"
                src="https://assets10.lottiefiles.com/packages/lf20_f5agjqp7.json"
                background="transparent"
                speed="1"
                style={{ width: "", height: "500px", resizeMode: "cover" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-mobile">
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  name="fullname"
                />
                {errors?.fullname && (
                  <p className="text-red-500">Fullname cannot be empty.</p>
                )}
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors?.email && (
                  <p className="text-red-500">Email cannot be empty.</p>
                )}
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Subject
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                {errors?.subject && (
                  <p className="text-red-500">Subject cannot be empty.</p>
                )}
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                {errors?.message && (
                  <p className="text-red-500">Message body cannot be empty.</p>
                )}
              </div>
              <div className="mt-8">
                <button
                  style={{ backgroundColor: "#00638D" }}
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="text-center ">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                  Thank you! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
