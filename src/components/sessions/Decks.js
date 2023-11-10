const Card = ({ date, venue, type, resources_link, topic }) => {
  return (
    <div className='card shadow border-0 rounded-4 mb-5'>
      <div className='card-body p-5'>
        <div className='row align-items-center gx-5'>
          <div className='col text-center text-lg-start mb-4 mb-lg-0'>
            <div className='bg-light p-4 rounded-4'>
              <div className='text-primary fw-bolder mb-2'>
                {date}
              </div>
              <div className='small fw-bolder'>{venue}</div>
              <div className='small text-muted'>{type}</div>
            </div>
          </div>
          <div className='col-lg-8'>
            <div>
              <h1>{topic}</h1>
              <p>Link: <a href={resources_link} target="_blank">View Slides Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  const presentations = [
    {
      date: "November 10, 2023",
      venue: "DjangoCOn Africa: Zanzibar",
      type: "Physical",
      resources_link: "https://www.dropbox.com/scl/fi/siaaoick01cbzhksyvlo7/DjangoCon-Africa-Workshop-Authentication-APIs.pdf?rlkey=v0nqf4bvh9u6rd1jkhcs59n94&dl=0",
      topic: "Building Authentication APIs with Django"
    },
    {
      date: "October 14, 2023",
      venue: "GDSC Strathmore",
      type: "Virtual",
      resources_link: "https://docs.google.com/presentation/d/1qk59BvtqkeU6sthYGqidfmQmXhnFbxxFluwkzN094Lo/edit?usp=sharing",
      topic: "Introduction To Git and GitHub"
    },
    {
      date: "July 9, 2023",
      venue: "Nairobi DevOps COmmunity",
      type: "Virtual",
      resources_link: "https://docs.google.com/presentation/d/1Tgz937URQ1CcTmLcFy5M1obtJ0agV7u1SKKcRjXsExs/edit?usp=sharing",
      topic: "CI/CD With GitHub Actions"
    },
    {
      date: "July 1, 2023",
      venue: "GDSC Strathmore",
      type: "Physical",
      resources_link: "https://docs.google.com/presentation/d/1-3dyJrMj9CIAxMPXgwbOcrHaUWVJeK8AhgOgX91H-O8/edit?usp=sharing",
      topic: "BUILDING PWA WITH ANGULAR using PWAFIRE"
    },
    {
      date: "2023",
      venue: "Swahilibox - Mombasa",
      type: "Physical",
      resources_link: "https://docs.google.com/presentation/d/1SL7iO6fgVlIljWqgN1SNTslsUHZiIf9wQWL0-Ouunjg/edit?usp=sharing",
      topic: "T is 4 Trello"
    }
  ];

  return (
    <section>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h2 className='text-primary fw-bolder mb-0'>Slides and Presentations</h2>
      </div>
      {presentations.map((presentation, index) => (
        <Card key={index} {...presentation} />
      ))}
    </section>
  )
}

export default Experience
