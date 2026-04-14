import DefaultLayout from "@layouts/DefaultLayout"
import Footer from "@/components/Moduls/landingPage/Footer"
import Jumbotron from "@/components/Moduls/landingPage/Jumbotron"
import SectionDownload from "@/components/Moduls/landingPage/SectionContents/SectionDownload"
import SectionEnjoy from "@/components/Moduls/landingPage/SectionContents/SectionEnjoy"
import SectionFAQ from "@/components/Moduls/landingPage/SectionContents/SectionFAQ"
import SectionProfile from "@/components/Moduls/landingPage/SectionContents/SectionProfile"
import SectionWatch from "@/components/Moduls/landingPage/SectionContents/SectionWatch"

function Landing(){

  return (
    <DefaultLayout>
      <Jumbotron/>
      <SectionEnjoy/>
      <SectionDownload/>
      <SectionWatch/>
      <SectionProfile/>
      <SectionFAQ/>
      <Footer/>
    </DefaultLayout>
  )
}

export default Landing 