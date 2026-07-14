import { useState, useRef } from "react";
import { motion as Motion } from "motion/react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { textBlur } from "../../utils/animationsMotion/blurTextAnimation";
import { divTransition } from "../../utils/animationsMotion/divTransition";
import "./ContactForm.css";

export const ContactForm = () => {
  const { t } = useTranslation();
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.required");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.errors.email");
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.errors.required");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.required");
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await recaptchaRef.current.executeAsync();
      if (!token) {
        throw new Error("reCAPTCHA verification failed");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          "g-recaptcha-response": token,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC,
        }
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      recaptchaRef.current.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("FAILED...", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id="contact">
      <div className="contact-form__container">
        <div className="contact-form__info-column">
          <div className="contact-form__contact-info">
            <Motion.h3
              className="contact-form__contact-title"
              variants={textBlur(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("contact.detailsTitle")}
            </Motion.h3>
            <Motion.p
              className="contact-form__contact-item"
              variants={textBlur(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("contact.myEmail")}
            </Motion.p>
            <Motion.p
              className="contact-form__contact-item"
              variants={textBlur(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("contact.myPhone")}
            </Motion.p>
            <Motion.p
              className="contact-form__contact-item"
              variants={textBlur(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("contact.myLocation")}
            </Motion.p>
          </div>
          <Motion.img
            className="contact-form__illustration"
            variants={divTransition(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="/images/illustration.png" 
            alt="Contact Illustration" 
          />
        </div>

        <div className="contact-form__form-column">
          <div className="contact-form__form-header">
            <Motion.h2
              className="contact-form__form-title"
              variants={textBlur(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("contact.title")}
            </Motion.h2>
          </div>
          <Motion.form
            className="contact-form__form-element"
            onSubmit={handleSubmit}
            variants={divTransition(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isSuccess && (
              <div className="contact-form__success-message">
                {t("contact.success")}
              </div>
            )}

            <div className="contact-form__input-group">
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form__input-field"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder=" "
              />
              <label htmlFor="name" className="contact-form__input-label">
                {t("contact.name")}
              </label>
              {errors.name && <span className="contact-form__error-message">{errors.name}</span>}
            </div>

            <div className="contact-form__input-group">
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form__input-field"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder=" "
              />
              <label htmlFor="email" className="contact-form__input-label">
                {t("contact.email")}
              </label>
              {errors.email && <span className="contact-form__error-message">{errors.email}</span>}
            </div>

            <div className="contact-form__input-group">
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact-form__input-field"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder=" "
              />
              <label htmlFor="subject" className="contact-form__input-label">
                {t("contact.subject")}
              </label>
              {errors.subject && <span className="contact-form__error-message">{errors.subject}</span>}
            </div>

            <div className="contact-form__input-group">
              <textarea
                id="message"
                name="message"
                className="contact-form__textarea-field"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder=" "
              />
              <label htmlFor="message" className="contact-form__input-label">
                {t("contact.message")}
              </label>
              {errors.message && <span className="contact-form__error-message">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="contact-form__submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "..." : t("contact.send")}
            </button>

            <p className="contact-form__recaptcha-info">
              {t("contact.recaptcha.prefix")}{" "}
              <a target="_blank" rel="noreferrer" href="https://policies.google.com/privacy">
                {t("contact.recaptcha.privacy")}
              </a>{" "}
              {t("contact.recaptcha.and")}{" "}
              <a target="_blank" rel="noreferrer" href="https://policies.google.com/terms">
                {t("contact.recaptcha.terms")}
              </a>{" "}
              {t("contact.recaptcha.suffix")}
            </p>

            <div className="contact-form__captcha-container">
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE}
              />
            </div>
          </Motion.form>
        </div>
      </div>
    </section>
  );
};
