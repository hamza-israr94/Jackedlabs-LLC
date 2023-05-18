import { spawn } from 'child_process';
import { sendContact } from 'lib/config';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    isLoading: false,
    error: '',
    values: {
      name: '',
      email: '',
      phone: '',
      comments: '',
    },
  });
  const notify = () => toast('Message sent successfully!');
  const errorToast = () => toast(`Failed to send message`);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value },
    }));
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setFormState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      await sendContact(formState.values);
      notify();
      setFormState({
        isLoading: false,
        error: '',
        values: {
          name: '',
          email: '',
          phone: '',
          comments: '',
        },
      });
    } catch (error: any) {
      setFormState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: error.message,
      }));
      errorToast();
    }
  };

  return (
    <form
      onSubmit={(e) => submitForm(e)}
      className="px-[50px] py-[70px] relative pb-[140px] "
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progressStyle={{ backgroundColor: '#F57D8D' }}
      />
      {/* {formState.error && (
        <h3 className="text-red-600 mb-6">{formState.error}</h3>
      )} */}
      <div className="relative mb-16">
        <input
          id="name"
          name="name"
          type="text"
          value={formState.values.name}
          onChange={(e) => handleChange(e)}
          className="peer bg-transparent h-10 w-full text-xl border-b-2 border-[#ffffff]/30 text-gray-300 placeholder-transparent focus:outline-none focus:border-[#ffffff]/80"
          placeholder="Enter your name"
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-3.5 cursor-text text-white text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
        >
          Name <span className="text-red-600">*</span>
        </label>
      </div>

      <div className="relative mb-16">
        <input
          id="email"
          name="email"
          value={formState.values.email}
          onChange={(e) => handleChange(e)}
          type="email"
          className="peer bg-transparent h-10 w-full text-xl border-b-2 border-[#ffffff]/30 text-gray-300 placeholder-transparent focus:outline-none focus:border-[#ffffff]/80"
          placeholder="Enter your Email"
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-3.5 cursor-text text-white text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
        >
          E-mail <span className="text-red-600">*</span>
        </label>
      </div>

      <div className="relative mb-16">
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formState.values.phone}
          required
          // pattern="[0-9]{10}"
          className="peer bg-transparent h-10 w-full text-xl border-b-2 border-[#ffffff]/30 text-gray-300 placeholder-transparent focus:outline-none focus:border-[#ffffff]/80"
          placeholder="Enter your phone"
        />
        <label
          htmlFor="phone"
          className="absolute left-0 -top-3.5 cursor-text text-white text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
        >
          Phone number <span className="text-red-600">*</span>
        </label>
      </div>

      <div className="relative mb-16">
        <input
          id="comment"
          name="comments"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formState.values.comments}
          className="peer bg-transparent h-10 w-full text-xl border-b-2 border-[#ffffff]/30 text-gray-300 placeholder-transparent focus:outline-none focus:border-[#ffffff]/80"
          placeholder="Comments"
        />
        <label
          htmlFor="comment"
          className="absolute left-0 -top-3.5 cursor-text text-white text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
        >
          Comments <span className="text-red-600">*</span>
        </label>
      </div>

      <button
        disabled={
          !formState.values.name ||
          !formState.values.email ||
          !formState.values.phone ||
          !formState.values.comments
        }
        className="w-full bg-[#F57D8D] p-2 mb-5 text-gray-50 disabled:opacity-60"
      >
        {' '}
        {formState.isLoading === true ? 'loading...' : 'Submit'}
      </button>

      <div className="absolute top-[-50px] left-[45%]">
        <svg
          width={83}
          height={95}
          viewBox="0 0 83 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.488045 40.8156C0.506847 40.773 0.520949 40.7305 0.539752 40.6879C0.553854 40.6596 0.563256 40.6265 0.577357 40.5981C0.591459 40.565 0.605559 40.5366 0.619661 40.5035C1.09442 39.3688 1.83242 38.4137 2.74434 37.8794L3.00287 37.7281L34.3654 19.5059L65.7278 1.28368L65.9864 1.13238C66.8983 0.602833 67.8149 0.598105 68.5811 1.01418C68.6046 1.02364 68.6234 1.03782 68.6422 1.04728C68.661 1.06146 68.6845 1.07092 68.7033 1.08037L72.8446 3.48227L70.4566 4.49881L78.7391 48.669C78.9507 49.8085 78.7626 51.0662 78.2879 52.1962C78.2738 52.2293 78.2597 52.2577 78.2503 52.2908C78.2362 52.3191 78.2268 52.3522 78.2127 52.3806C77.7379 53.5154 76.9999 54.4752 76.088 55.0047L13.5369 91.3593L14.1151 94.13L10.1948 91.8463C10.176 91.8369 10.1525 91.8227 10.1337 91.8132C9.3675 91.4019 8.79403 90.5887 8.5778 89.4492L0.0931915 44.2199C-0.113635 43.1229 0.0555884 41.9173 0.488045 40.8156Z"
            fill="white"
          />
          <path
            d="M16.9166 94.1253L80.1586 57.383C82.0718 56.2719 83.2328 53.2931 82.7487 50.7258L74.391 6.1442C73.9115 3.57683 71.9702 2.39952 70.057 3.51063L6.81028 40.2482C4.89713 41.3593 3.73608 44.3381 4.22024 46.9054L12.5779 91.487C13.0621 94.0544 15.0034 95.2364 16.9166 94.1253Z"
            fill="url(#paint0_linear_0_1)"
          />
          <path
            d="M7.0687 40.1017L38.4312 21.8794L48.2602 74.2908L17.1703 93.974C15.1161 95.1702 13.0855 94.2009 12.6389 91.8132L4.15902 46.5839C3.71246 44.1962 5.01453 41.2931 7.0687 40.1017Z"
            fill="url(#paint1_linear_0_1)"
          />
          <path
            d="M69.7936 3.66193L38.4312 21.8842L48.199 73.9645L79.9 57.539C81.9541 56.3428 83.2562 53.4397 82.8096 51.052L74.3297 5.82269C73.8785 3.43498 71.8525 2.46572 69.7936 3.66193Z"
            fill="url(#paint2_linear_0_1)"
          />
          <path
            d="M82.4102 54.4515C81.8979 55.7423 81.0095 56.8912 79.9001 57.5343L17.1705 93.974C16.0611 94.617 14.9612 94.6265 14.1104 94.13L42.2153 42.0496L82.4102 54.4515Z"
            fill="url(#paint3_linear_0_1)"
          />
          <path
            d="M4.55859 43.1844C5.07096 41.8936 5.95938 40.7447 7.06872 40.1017L69.7937 3.66194C70.903 3.01891 72.003 3.00945 72.8538 3.50591L44.7488 55.5863L4.55859 43.1844Z"
            fill="url(#paint4_linear_0_1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="78.5685"
              y1="28.4343"
              x2="3.39883"
              y2="42.5313"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7BDAFF" />
              <stop offset={1} stopColor="#59BDEF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="1.41388"
              y1="128.705"
              x2="39.8197"
              y2="56.5987"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.7677" stopColor="#59BDEF" />
              <stop offset="0.8452" stopColor="#55B8EB" />
              <stop offset="0.9318" stopColor="#49ABE1" />
              <stop offset={1} stopColor="#3A9BD5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="104.354"
              y1="68.8155"
              x2="51.1293"
              y2="46.3335"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.7677" stopColor="#59BDEF" />
              <stop offset="0.8452" stopColor="#55B8EB" />
              <stop offset="0.9318" stopColor="#49ABE1" />
              <stop offset={1} stopColor="#3A9BD5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_1"
              x1="58.5662"
              y1="129.241"
              x2="20.3418"
              y2="63.4476"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.7677" stopColor="#3A9BD5" />
              <stop offset="0.8386" stopColor="#3896D2" />
              <stop offset="0.9179" stopColor="#3189C9" />
              <stop offset={1} stopColor="#2573BA" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_0_1"
              x1="59.7452"
              y1="-3.07315"
              x2="-11.0388"
              y2="50.4518"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7BDAFF" />
              <stop offset={1} stopColor="#59BDEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </form>
  );
};

export default ContactForm;
