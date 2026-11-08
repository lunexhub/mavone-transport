import { ArrowDown, ArrowRight, ArrowUpRight, Check, Compass, MapPin, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import airportCar from "@/assets/mavone-airport-car.jpeg";
import companyCar from "@/assets/mavone-company-car.jpg";
import companyMinivan from "@/assets/mavone-company-minivan.jpg";
import founderPhoto from "@/assets/mavone-founder-safari.jpeg";
import travellerPhotoOne from "@/assets/mavone-traveller-1.jpeg";
import travellerPhotoTwo from "@/assets/mavone-traveller-2.jpeg";
import h1Image from "@/assets/hyundai-h1-shuttle.jpg";
import coachImage from "@/assets/executive-coach.jpg";
import { Button } from "@/components/ui/button";
import { useMavoneLanguage } from "@/lib/mavone-language";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mavone Tours | Gauteng Transfers, Tours & Group Travel" },
      {
        name: "description",
        content:
          "Travel with Mavone Tours for private shuttles, OR Tambo transfers, tours and group transport across Gauteng and South Africa.",
      },
      { property: "og:title", content: "Mavone Tours | Travel with us" },
      {
        property: "og:description",
        content:
          "Creating journeys, not just transport. Private transfers, tours and group travel from Gauteng, South Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useMavoneLanguage();

  const services = [
    { icon: MapPin, title: t("serviceShuttle"), copy: t("serviceShuttleCopy") },
    { icon: ArrowUpRight, title: t("serviceAirport"), copy: t("serviceAirportCopy") },
    { icon: Compass, title: t("serviceTours"), copy: t("serviceToursCopy") },
    { icon: Sparkles, title: t("serviceGroups"), copy: t("serviceGroupsCopy") },
    { icon: ShieldCheck, title: t("serviceCorporate"), copy: t("serviceCorporateCopy") },
    { icon: ArrowRight, title: t("serviceCourier"), copy: t("serviceCourierCopy") },
  ];

  const vehicles = [
    {
      image: companyCar,
      alt: "Mavone Tours branded private car at an airport pickup area",
      title: t("fleetCar"),
      detail: t("fleetCarDetail"),
      seats: t("capacity"),
      actual: true,
    },
    {
      image: companyMinivan,
      alt: "Mavone Tours white passenger minivan outside a hotel",
      title: t("fleetMinibus"),
      detail: t("fleetMinibusDetail"),
      seats: t("capacity"),
      actual: true,
    },
    {
      image: h1Image,
      alt: "White Hyundai H-1 shuttle van at an airport terminal",
      title: t("fleetH1"),
      detail: t("fleetH1Detail"),
      seats: t("capacity"),
      actual: false,
    },
    {
      image: coachImage,
      alt: "White executive coach on a scenic South African road",
      title: t("fleetCoach"),
      detail: t("fleetCoachDetail"),
      seats: t("groupCapacity"),
      actual: false,
    },
  ];

  const assurances = [
    { icon: ShieldCheck, title: t("comfortSafety"), copy: t("comfortSafetyCopy") },
    { icon: Check, title: t("comfortVehicles"), copy: t("comfortVehiclesCopy") },
    { icon: Wifi, title: t("comfortOnboard"), copy: t("comfortOnboardCopy") },
    { icon: Compass, title: t("comfortFlexible"), copy: t("comfortFlexibleCopy") },
  ];

  return (
    <main id="home">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={airportCar}
          alt="Mavone Tours car ready for an airport transfer"
          width={864}
          height={576}
          fetchPriority="high"
        />
        <div className="hero-inner">
          <p className="eyebrow hero-eyebrow"><span />{t("eyebrow")}</p>
          <h1 id="hero-title">{t("heroTitle").split("\n").map((line, index) => <span key={index}>{line}</span>)}</h1>
          <p className="hero-copy">{t("heroCopy")}</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="hero-button">
              <a href="#contact">{t("book")} <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <a className="hero-text-link" href="#services">{t("heroLink")} <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="hero-caption"><span />{t("trusted")}</div>
        </div>
        <a href="#intro" className="hero-scroll" aria-label={t("introLabel")}><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="intro-section section-wrap" id="intro">
        <div className="intro-topline"><span>{t("introLabel")}</span><span className="intro-rule" /></div>
        <div className="intro-grid">
          <h2>{t("introTitle")}</h2>
          <div className="intro-aside">
            <p>{t("introCopy")}</p>
            <div className="intro-stats">
              <div><strong>{t("yearsValue")}</strong><span>{t("years")}</span></div>
              <div><strong>Level 1</strong><span>{t("ownership")}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div><span className="section-kicker">{t("servicesLabel")}</span><h2>{t("servicesTitle")}</h2></div>
            <p>{t("servicesCopy")}</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, copy }, index) => (
              <article className="service-item" key={title}>
                <div className="service-meta"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fleet-section section-wrap" id="fleet">
        <div className="section-heading fleet-heading">
          <div><span className="section-kicker">{t("fleetLabel")}</span><h2>{t("fleetTitle")}</h2></div>
          <p>{t("fleetCopy")}</p>
        </div>
        <div className="fleet-grid">
          {vehicles.map((vehicle, index) => (
            <article className={`fleet-item ${index === 0 ? "fleet-item-featured" : ""}`} key={vehicle.title}>
              <div className="fleet-image-wrap">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
                <span className="fleet-seats">{vehicle.seats}</span>
              </div>
              <div className="fleet-caption">
                <div><h3>{vehicle.title}</h3><p>{vehicle.detail}</p></div>
                {vehicle.actual ? null : <span className="image-note">{t("representative")}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="comfort-section">
        <div className="comfort-inner section-wrap">
          <div className="comfort-copy">
            <span className="section-kicker">{t("comfortLabel")}</span>
            <h2>{t("comfortTitle")}</h2>
            <p>{t("comfortCopy")}</p>
          </div>
          <div className="assurance-list">
            {assurances.map(({ icon: Icon, title, copy }, index) => (
              <article className="assurance-item" key={title}>
                <div className="assurance-icon"><Icon aria-hidden="true" /></div>
                <div><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section section-wrap" id="story">
        <div className="story-photo-grid">
          <figure className="story-photo story-photo-main">
            <img src={founderPhoto} alt="A Mavone Tours team member enjoying a South African wildlife experience" width={1368} height={2048} loading="lazy" />
          </figure>
          <figure className="story-photo story-photo-small">
            <img src={travellerPhotoOne} alt="A Mavone Tours driver and passenger sharing a friendly ride" width={1080} height={1080} loading="lazy" />
          </figure>
          <figure className="story-photo story-photo-small story-photo-last">
            <img src={travellerPhotoTwo} alt="Passengers travelling together with their Mavone Tours driver" width={1080} height={1080} loading="lazy" />
          </figure>
          <span className="story-photo-mark">{t("trusted")}</span>
        </div>
        <div className="story-copy">
          <span className="section-kicker">{t("storyLabel")}</span>
          <h2>{t("storyTitle")}</h2>
          <p>{t("storyCopy")}</p>
          <blockquote>{t("storyQuote")}</blockquote>
          <div className="story-signature"><span className="signature-line" /><span>Thimothy Khosa <small>· Founder & Director</small></span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner section-wrap">
          <div className="contact-heading">
            <span className="section-kicker">{t("contactLabel")}</span>
            <h2>{t("contactTitle")}</h2>
            <p>{t("contactCopy")}</p>
            <div className="contact-actions">
              <Button asChild size="lg" className="contact-button">
                <a href="https://wa.me/27835692028" target="_blank" rel="noreferrer">{t("whatsapp")} <ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <a className="contact-email-link" href="mailto:mavonetours@gmail.com">{t("emailUs")} <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="contact-details">
            <div><span>{t("phoneLabel")}</span><a href="tel:+27835692028">+27 83 569 2028</a></div>
            <div><span>{t("emailLabel")}</span><a href="mailto:mavonetours@gmail.com">mavonetours@gmail.com</a></div>
            <div><span>{t("locationLabel")}</span><p>{t("location")}</p></div>
            <p className="contact-reg">MAVONE TOURS (PTY) LTD <span>·</span> 2023/789402/07</p>
          </div>
        </div>
      </section>
    </main>
  );
}