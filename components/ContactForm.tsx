import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formbold.com/s/35el8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }
      setIsSubmitted(true);
    } catch (error) {
      setError(
        "An error occurred while submitting the form. Please try again."
      );
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <form
      className="max-w-xl w-full flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      {isSubmitted ? (
        <div className="w-full p-6 lg:p-10 mt-8 bg-white border rounded-md shadow-md">
          <h2 className="text-2xl text-black font-bold mb-4">
            Thank You for Reaching Out!
          </h2>
          <p className="text-gray-600">
            Hey {formData.name}! 🌟 <br />
            Thanks for your message! I appreciate your interest. I&apos;ll get
            back to you shortly.
          </p>
          <br />
          <p className="text-gray-600">
            Feel free to explore more of my portfolio while you wait. If you
            have more to share or questions, drop me another message.
          </p>
          <br />
          <p className="text-gray-600">
            Cheers,
            <br />
            Amit Nemade
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold">Let&apos;s Connect!</h2>
          <p className="dark:text-neutral-300 text-neutral-600">
            Hey there! I&apos;m thrilled that you want to get in touch. <br />
            Whether you have a question, a project idea, or just want to say
            hello, I&apos;m all ears!
          </p>
          <div className="flex gap-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm dark:text-white font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-lg dark:bg-white/20 dark:border-neutral-500 dark:focus:border-white/80 bg-white shadow-1 border focus:border-black focus:ring-0 ring-0 focus-visible:outline-none"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm dark:text-white font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-lg dark:bg-white/20 dark:border-neutral-500 dark:focus:border-white/80 bg-white shadow-1 border focus:border-black focus:ring-0 ring-0 focus-visible:outline-none"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm dark:text-white font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="mt-1 p-2 w-full rounded-lg dark:bg-white/20 dark:border-neutral-500 dark:focus:border-white/80 bg-white shadow-1 border focus:border-black focus:ring-0 ring-0 focus-visible:outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-full items-start gap-2">
            <button
              type="submit"
              className="bg-black w-full dark:bg-white gap-2 dark:text-black p-3 text-sm text-white rounded-lg hover:animate-glow dark:hover:animate-glowDark text-center"
            >
              Submit
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
