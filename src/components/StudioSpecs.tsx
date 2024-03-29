import { useState } from 'react'
import SpecList from '../data/specs.json'

interface Spec {
  id: number,
  type: string,
  name: string
  icon: string,
}

export default function StudioSpecs() {
  const [specList] = useState<Spec[]>(SpecList)

  return (
    <div className={'flex flex-col w-full mb-10'}>
      <h2 className={'text-center text-4xl mt-8 mb-6'}>Home Studio</h2>
      <div className={'mx-auto'}>
        {specList.map((spec) => (
          <div key={spec.id} className={'flex flex-row space-x-2 border-b border-black p-2'}>
            {/* <img src={spec.icon} alt={spec.name} className={'w-6 h-6'}/> */}
            <p><span className={'font-bold mr-2'}>{spec.type}:</span>{spec.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
