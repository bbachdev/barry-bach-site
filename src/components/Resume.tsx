import ResumeData from '../data/resume.json'

interface Resume {
  credits:    Credits[];
  education:  Education[];
  additional: Additional[];
}

interface Additional {
  header:  string;
  details: string;
}

interface Credits {
  categoryId:   string;
  categoryName: string;
  items:        CreditsItem[];
}

interface CreditsItem {
  itemId:  string;
  project: string;
  year:    string;
  role:    string;
  client:  string;
  url?:    string;
}

interface Education {
  categoryId:   string;
  categoryName: string;
  items:        EducationItem[];
}

interface EducationItem {
  itemId:     string;
  name:       string;
  instructor: string;
  studio:     string;
}

export default function Resume() {
  const resume : Resume = ResumeData

  // const downloadResume = () => {
  //   console.log('download resume')
  // }

  return (
    <>
      {/* Desktop/Tablet View (Table) */}
      <div id="resumeSection" className={'hidden md:flex flex-col pb-10 w-4/5 mx-auto'}>
        <div className={'flex flex-row items-center relative'}>
          <h2 className={'text-4xl mt-8 mb-6 mx-auto'}>Resume</h2>
          {/* TODO: Add download button */}
          {/* <a className={'cursor-pointer mt-4 absolute right-0'} onClick={downloadResume} download title='Download'>
            <FileDownloadIcon fontSize={'large'}/>
          </a> */}
        </div>
        {/* TODO: For mobile, potentially have each row be "Role" bolded as main, and then newline with the other fields? */}
        <div className={'text-3xl mb-6 text-gray-400'}>Credits</div>
        {resume.credits.map((credit : Credits) => (
          <div key={credit.categoryId}>
            <h4 className={'text-lg mb-6 text-gray-400'}>{credit.categoryName}</h4>
            <table className={'table-auto w-full'}>
              <thead>
                <tr>
                  <th className={'text-left w-1/4 pb-4 px-4'}>Project</th>
                  <th className={'text-left pb-4 px-4'}>Year</th>
                  <th className={'text-left w-1/2 pb-4 px-4'}>Project(s)</th>
                  <th className={'text-left pb-4 px-4'}>Client</th>
                </tr>
              </thead>
              <tbody>
                {credit.items.map((item : CreditsItem) => (
                  <tr key={item.itemId} className={`odd:bg-[#525252]`}>
                    <td className={'text-xl pt-4 pb-4 px-4'}>{item.project}</td>
                    <td className={'text-lg pt-4 pb-4 px-4'}>{item.year}</td>
                    <td className={'text-lg italic pr-4 pt-4 pb-4 px-4'}>{item.role}</td>
                    <td className={'text-lg pt-4 pb-4 px-4'}>{item.client}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <hr className={`my-6`}></hr>
        <div className={'text-3xl mb-2 text-gray-400'}>Education & Training</div>
        {resume.education.map((education : Education) => (
          <div key={education.categoryId}>
            <h4 className={'text-lg mb-6 text-gray-400 mt-4'}>{education.categoryName}</h4>
            <table className={'table-auto w-full'}>
              <thead>
                <tr>
                  <th className={'text-left w-1/4 pb-4 px-4'}>Studio</th>
                  <th className={'text-left w-1/3 pb-4 px-4'}>Type</th>
                  <th className={'text-left pb-4 px-4'}>Instructors</th>
                </tr>
              </thead>
              <tbody>
                {education.items.map((item : EducationItem) => (
                  <tr key={item.itemId} className={`odd:bg-[#525252]`}>
                    <td className={'text-xl pt-4 pb-4 px-4'}>{item.studio}</td>
                    <td className={'text-lg pt-4 pb-4 px-4'}>{item.name}</td>
                    <td className={'text-lg pt-4 pb-4 px-4'}>{item.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <hr className={`my-10`}></hr>
        <div className={'text-3xl mb-6 text-gray-400'}>Additional Info</div>
        {resume.additional.map((additional : Additional) => (
          <div key={additional.header} className={'flex flex-col space-y-2'}>
            <h4 className={'text-lg mb-2 text-gray-400'}>{additional.header}</h4>
            <p className={'text-lg'} dangerouslySetInnerHTML={{__html: additional.details}}></p>
          </div>
        ))}
      </div>
      {/* Mobile View (List) */}
      <div id="resumeSection" className={'flex flex-col md:hidden pb-10 w-4/5 mx-auto'}>
        <div className={'flex flex-row items-center relative'}>
          <h2 className={'text-4xl mt-8 mb-4 mx-auto'}>Resume</h2>
          {/* TODO: Add download button */}
          {/* <a className={'cursor-pointer mt-4 absolute right-0'} onClick={downloadResume} download title='Download'>
            <FileDownloadIcon fontSize={'large'}/>
          </a> */}
        </div>
        <div className={'text-3xl mb-6 text-gray-400'}>Credits</div>
        {resume.credits.map((credit : Credits) => (
          <div key={credit.categoryId}>
            <h4 className={'text-md mb-6 text-gray-400'}>{credit.categoryName}</h4>
            <div className={'flex flex-col space-y-4'}>
              {credit.items.map((item : CreditsItem) => (
                <div key={item.itemId}>
                  <p>
                    <span className={'text-lg font-bold'}>- {item.project}</span>
                    <span className={'text-lg'}> ({item.year})</span>
                    <br/>
                    {item.role !== '-' && (
                      <>
                        <span className={'text-lg italic'}>{item.role}</span>
                        <br/>
                        <span className={'text-md'}>{item.client}</span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <hr className={`my-6`}></hr>
        <div className={'text-3xl mb-2 text-gray-400'}>Education & Training</div>
        {resume.education.map((education : Education) => (
          <>
            <div key={education.categoryId}>
              <h4 className={'text-md mb-6 text-gray-400 mt-4'}>{education.categoryName}</h4>
              <div className={'flex flex-col space-y-4'}>
                {education.items.map((item : EducationItem) => (
                  <div key={item.itemId}>
                    <p className={`mb-4`}>
                      <span className={'text-lg font-bold'}>- {item.studio}</span>
                      <br/>
                      <span className={'text-sm italic'}>{item.name}</span>
                      <br/>
                      <span className={'text-md'}>{item.instructor}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
        <hr className={`my-6`}></hr>
        <div className={'text-3xl mb-6 text-gray-400'}>Additional Info</div>
        {resume.additional.map((additional : Additional) => (
          <div key={additional.header} className={'flex flex-col space-y-2'}>
            <h4 className={'text-md mb-2 text-gray-400'}>{additional.header}</h4>
            <p className={'text-md'} dangerouslySetInnerHTML={{__html: additional.details}}></p>
          </div>
        ))}
      </div>
    </>
  )
}
