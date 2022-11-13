
import Ticker from 'react-ticker';
import frontpageImage from '../images/frontpage.jpg';
import frontpageImageFull from '../images/frontpage_full.jpg';
import { Image } from 'react-bootstrap';
import CTAEmblem from './CTAEmblem';

export default function Header()
{
    return (
        <>
            <div className="frontpageImageDiv">
                <Image src={frontpageImageFull} fluid className="frontpageImage d-block d-sm-none" />
                <Image src={frontpageImage} fluid className="frontpageImage d-none d-sm-block" />
                <div className="ticker-logo-line" >
                    <Ticker speed={2} >
                        {({ index }) => (
                            <>
                                <span>Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway Kiki Gotaway</span>
                            </>
                        )}
                    </Ticker>
                </div>

                <div className="ticker-tag-line">
                    <Ticker speed={5}>
                        {({ index }) => (
                            <>
                                <span>We make intelligent design. We make advertising memorable. We make words that matter. We make brands loveable. We make Intelligent design, advertising memorable, WORDS that  MATTER & brands loveable.</span>
                            </>
                        )}
                    </Ticker>
                </div>

                <div className="frontpage-slogan">
                    <CTAEmblem className="frontpage-cta-emblem" />
                    <div className="frontpage-tagline">
                        Notice anything different about me?
                    </div>
                </div>

            </div>




        </>
    );
}

