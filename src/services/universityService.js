const universities = {
  1: {
    id: 1,
    name: 'Premier Institute of Technology',
    tagline: 'Excellence in Technical Education',
    placementRate: '95%',
    avgPackage: '12 LPA',
    overview: 'Premier Institute of Technology is a leading technical institution dedicated to producing world-class engineers and technologists. With state-of-the-art facilities and experienced faculty, we have established ourselves as a center of excellence in technical education.',
    courses: [
      { name: 'B.Tech Computer Science', min: 350000, max: 450000 },
      { name: 'B.Tech Mechanical Engineering', min: 300000, max: 400000 },
      { name: 'B.Tech Electronics & Communication', min: 320000, max: 420000 },
      { name: 'B.Tech Civil Engineering', min: 280000, max: 380000 },
    ],
  },
  2: {
    id: 2,
    name: 'Global Business University',
    tagline: 'Leading Business School for Future Leaders',
    placementRate: '98%',
    avgPackage: '18 LPA',
    overview: 'Global Business University is a premier institution offering world-class business education with international recognition. Our programs are designed to develop leaders who can drive innovation and create value in the global economy.',
    courses: [
      { name: 'MBA - General Management', min: 1200000, max: 1500000 },
      { name: 'MBA - Finance', min: 1300000, max: 1600000 },
      { name: 'BBA - Business Administration', min: 400000, max: 550000 },
      { name: 'Executive MBA', min: 1500000, max: 1800000 },
    ],
  },
}

export async function getUniversityData(id) {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(universities[id])
    }, 500)
  })
}
