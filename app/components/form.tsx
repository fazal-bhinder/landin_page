"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    size: "",
    quantity: "",
    description: "",
  });

  type FormFields = typeof form;
  type FormErrors = Partial<Record<keyof FormFields, string>>;
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Invalid phone number";
    if (!form.timeFrame) newErrors.timeFrame = "Required";
    if (!form.size) newErrors.size = "Required";
    if (!form.quantity) newErrors.quantity = "Required";
    if (form.description.trim().length < 10)
      newErrors.description = "Project description must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-2xl font-bold mb-8">REQUEST A QUOTE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Name", type: "text", name: "name", placeholder: "Your Name" },
          { label: "E-mail", type: "email", name: "email", placeholder: "Your Email" },
          { label: "Phone Number", type: "text", name: "phone", placeholder: "Your Phone Number" },
        ].map((field) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <label className="block font-semibold mb-1">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors[field.name as keyof FormErrors] && (
              <p className="text-red-500 text-sm">{errors[field.name as keyof FormErrors]}</p>
            )}
          </motion.div>
        ))}

        {[
          { name: "timeFrame", label: "Time Frame *", options: ["1 week", "1 month"] },
          { name: "size", label: "Size *", options: ["Small", "Medium"] },
          { name: "quantity", label: "Quantity *", options: ["1", "5"] },
        ].map((field) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <label className="block font-semibold mb-1">{field.label}</label>
            <select
              name={field.name}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Choose {field.label}</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors[field.name as keyof FormErrors] && (
              <p className="text-red-500 text-sm">{errors[field.name as keyof FormErrors]}</p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <label className="block font-semibold mb-1">Please Describe Your Project *</label>
        <textarea
          name="description"
          placeholder="Choose a project type"
          rows={4}
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </motion.div>

      <motion.div
        className="mt-6 text-sm text-center text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        viewport={{ once: true }}
      >
        By submitting this form you agree to our{" "}
        <a href="#" className="text-blue-600 underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </motion.div>

      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Lorem Ipsum →
        </button>
      </motion.div>
    </motion.form>
  );
}
