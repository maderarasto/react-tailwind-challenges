import ChallengeItem from '../components/ChallengeItem';

import challenges from '../../challenges';

export default function Home() {
    return (
        <div className="w-full max-w-5xl h-[768px]">
            <h1 className="my-8 font-bold text-2xl text-center">ReactJS TailwindCSS Chanllenges</h1>
            <div className="grid grid-cols-4 gap-16 px-8">
                {challenges.map((item, index) => (
                    <ChallengeItem 
                        key={index}
                        title={item.name}
                        path={item.path}
                        previewImage={item.image}
                        status={item.status}
                />
                ))}
            </div>
        </div>
    )
}