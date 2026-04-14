

import DefaultLayout from '../../components/Layouts/DefaultLayout/index.jsx'
import Jumbotron from '../../components/Moduls/Jumbotron/index.jsx'
import SectionDownload from '../../components/Moduls/SectionContents/SectionDownload.jsx'
import SectionEnjoy from '../../components/Moduls/SectionContents/SectionEnjoy.jsx'
import SectionProfile from '../../components/Moduls/SectionContents/SectionProfile.jsx'
import SectionWatch from '../../components/Moduls/SectionContents/SectionWatch.jsx'

function Landing(){

  return (
    <DefaultLayout>
      <Jumbotron/>
      <SectionEnjoy/>
      <SectionDownload/>
      <SectionWatch/>
      <SectionProfile/>
    </DefaultLayout>
  )
}

export default Landing 