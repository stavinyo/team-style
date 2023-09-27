import { utilService } from "../services/util.service"

export function Members() {

    return (

        <main className="main-members">
            <img className='img-lines' src={utilService.getAssetSrc('lines')} alt="" />
            <img className='img-square' src={utilService.getAssetSrc('square')} alt="" />
            <section className="main-info">

                <h1 className="members-title">Delivering real results for top <br /> companies. Some of our <span>success stories.</span></h1>
                <div className="cards">

                    <div className="card">
                        <img className='img-q' src={utilService.getAssetSrc('q')} alt="" />
                        <p className="contact-text-info"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h1 className="contact-name">Kady Baker</h1>
                        <p className="contact-role">Product Manager at Bookmark</p>
                        <img className='img-member' src={utilService.getAssetSrc('member1')} alt="" />
                    </div>

                    <div className="card">
                        <img className='img-q' src={utilService.getAssetSrc('q')} alt="" />
                        <p className="contact-text-info">“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h1 className="contact-name">Aiysha Reese</h1>
                        <p className="contact-role">Founder of Manage</p>
                        <img className='img-member' src={utilService.getAssetSrc('member2')} alt="" />
                    </div>

                    <div className="card">
                        <img className='img-q' src={utilService.getAssetSrc('q')} alt="" />
                        <p className="contact-text-info">“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <h1 className="contact-name">Arthur Clarke</h1>
                        <p className="contact-role">Co-founder of MyPhysio</p>
                        <img className='img-member' src={utilService.getAssetSrc('member3')} alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}