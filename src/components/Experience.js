import { useState } from 'react'
import { Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import more from '../images/more_from_archive.png'
import { categories, cases } from '../includes/categories'
import { ArrowDown } from 'react-bootstrap-icons'

export default function Experience()
{

    const [activeCategory, setActiveCategory] = useState("")

    const catColorMap = new Map();
    categories.forEach(c => catColorMap.set(c.name, c.color))

    function handleCategoryClicked(event)
    {
        event.preventDefault()
        setActiveCategory(event.target.id)
    }

    function handleDropdownSelect(selectedValue)
    {
        setActiveCategory(selectedValue)
    }

    return (
        <Row>

            <h1>Experience</h1>

            <Row xs={1} lg={2}>
                <Col xs={{ order: 1 }} lg={{ order: 2 }} className="mb-4 >" >
                    <Image src={more} fluid />
                </Col>

                <Col xs={{ order: 2 }} lg={{ order: 1 }} >
                    <p>
                        We have expererience from most lines of business.
                        Here under you can see the companys we historically
                        have worked with, som of them in the context of Kiki
                        Gotaway, and some in a glorious past.
                    </p>

                    <div className="d-none d-lg-block">
                        {categories.map(c =>
                            <button className="categoryButton btn btn-outline-dark rounded-lg" id={c.name} key={c.name}
                                style={{ backgroundColor: activeCategory === c.name ? catColorMap.get(activeCategory) : 'white' }}
                                onClick={handleCategoryClicked}> {c.name} </button>
                        )
                        }
                    </div>

                    <div className="d-lg-none">
                        <DropdownButton onSelect={handleDropdownSelect} id="dropdown" title="Pick a customer category">
                            {categories.map(c => <Dropdown.Item id={c.name} eventKey={c.name} key={c.name}>{c.name}</Dropdown.Item>
                            )
                            }
                        </DropdownButton>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    {cases.map(c =>
                        <div id={c.name} key={c.name} className="caseDiv"
                            style={{ backgroundColor: activeCategory === c.category ? catColorMap.get(activeCategory) : 'white' }} >
                            {c.name}
                        </div>)
                    }
                </Col>
            </Row>
        </Row >
    );
}

