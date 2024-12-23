import BannerSection from "../../components/BannerSection"
import MopedoShowcase from "./MopedoShowcase"
import ServiceDetails from "./ServiceDetails"
import ServicesCards from "./ServicesCards"

const ServicesPage = () => {
    return (
        <div>
            <BannerSection heading={"Services We Provide"} />
            <MopedoShowcase />
            <ServicesCards />
            <ServiceDetails />
        </div>
    )
}

export default ServicesPage