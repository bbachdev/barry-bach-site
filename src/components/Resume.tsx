import ResumeData from '../data/resume.json'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

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
  year:       string;
  instructor: string;
  studio:     string;
}

export default function Resume() {
  const resume : Resume = ResumeData

  const downloadResume = () => {
    console.log('download resume')
  }

  return (
    <div id="resumeSection" className={'flex flex-col space-y-4 pb-10 w-4/5 mx-auto'}>
      <div className={'flex flex-row items-center relative'}>
        {/* TODO: Center this better */ }
        <h2 className={'text-4xl mt-8 mb-6 mx-auto'}>Resume</h2>
        <a className={'cursor-pointer mt-4 absolute right-0'} onClick={downloadResume} download title='Download'>
          <FileDownloadIcon fontSize={'large'}/>
        </a>
      </div>
      {/* TODO: For mobile, potentially have each row be "Role" bolded as main, and then newline with the other fields? */}
      <div className={'text-3xl mb-6 text-gray-400'}>Credits</div>
      {resume.credits.map((credit : Credits) => (
        <div key={credit.categoryId}>
          <h4 className={'text-lg mb-6 text-gray-400'}>{credit.categoryName}</h4>
          <table className={'table-auto w-full'}>
            <thead>
              <tr>
                <th className={'text-left w-1/4'}>Project</th>
                <th className={'text-left'}>Year</th>
                <th className={'text-left w-1/2'}>Role</th>
                <th className={'text-left'}>Client</th>
              </tr>
            </thead>
            <tbody>
              {credit.items.map((item : CreditsItem) => (
                <tr key={item.itemId}>
                  <td className={'text-xl py-2'}>{item.project}</td>
                  <td className={'text-lg'}>{item.year}</td>
                  <td className={'text-lg italic pr-4'}>{item.role}</td>
                  <td className={'text-lg'}>{item.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className={'text-3xl mb-6 text-gray-400'}>Education & Training</div>
      {resume.education.map((education : Education) => (
        <div key={education.categoryId}>
          <h4 className={'text-lg mb-6 text-gray-400'}>{education.categoryName}</h4>
          <table className={'table-auto w-full'}>
            <thead>
              <tr>
                <th className={'text-left'}>Name</th>
                <th className={'text-left'}>Year</th>
                <th className={'text-left'}>Instructor</th>
                <th className={'text-left'}>Studio</th>
              </tr>
            </thead>
            <tbody>
              {education.items.map((item : EducationItem) => (
                <tr key={item.itemId}>
                  <td className={'text-xl py-2'}>{item.name}</td>
                  <td className={'text-lg'}>{item.year}</td>
                  <td className={'text-lg'}>{item.instructor}</td>
                  <td className={'text-lg'}>{item.studio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className={'text-3xl mb-6 text-gray-400'}>Additional Info</div>
      {resume.additional.map((additional : Additional) => (
        <div key={additional.header} className={'flex flex-col space-y-2'}>
          <h4 className={'text-lg mb-2 text-gray-400'}>{additional.header}</h4>
          <p className={'text-lg'} dangerouslySetInnerHTML={{__html: additional.details}}></p>
        </div>
      ))}
    </div>
  )
}
