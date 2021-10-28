

function Cases()
{

    const categories = [
        { name: "Design companies", color: "#4DF823" },
        { name: "Retail", color: "#FBFA25" }
    ]

    const cases = [
        { name: "Royal Copenhagen" },
        { name: "Montana" },
        { name: "Inspiration" },
        { name: "BOOZT" }
    ]

    return (
        <div>
            <h1>Case oversigt</h1>

            {categories.map(c => <button>{c.name}</button>)}
            <br /><br />
            {cases.map(c => <div>{c.name}</div>)}


        </div>


    );
}

export default Cases;