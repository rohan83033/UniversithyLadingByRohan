export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const universities = {
    '1': {
      name: 'Premier Institute of Technology',
      tagline: 'Transforming Tomorrow\'s Engineers Today',
      placementRate: '95%',
      avgPackage: '8-12 LPA',
      overview: 'Premier Institute of Technology is a leading technical institution established in 2005, dedicated to providing quality engineering education. With state-of-the-art infrastructure and experienced faculty, we prepare students for the challenges of modern technology industry.',
      courses: [
        { name: 'B.Tech Computer Science & Engineering', min: 180000, max: 220000 },
        { name: 'B.Tech Information Technology', min: 180000, max: 220000 },
        { name: 'B.Tech Electronics & Communication', min: 160000, max: 200000 },
        { name: 'B.Tech Mechanical Engineering', min: 150000, max: 190000 },
        { name: 'B.Tech Civil Engineering', min: 140000, max: 180000 },
      ],
    },
    '2': {
      name: 'Global Business University',
      tagline: 'Building Global Business Leaders',
      placementRate: '98%',
      avgPackage: '15-20 LPA',
      overview: 'Global Business University is recognized as one of India\'s premier business schools, offering world-class management education. Our curriculum is designed in collaboration with industry leaders and international universities to ensure global relevance.',
      courses: [
        { name: 'MBA - General Management', min: 1200000, max: 1800000 },
        { name: 'MBA - Finance', min: 1200000, max: 1800000 },
        { name: 'MBA - Marketing', min: 1200000, max: 1800000 },
        { name: 'BBA - Business Administration', min: 350000, max: 450000 },
        { name: 'Executive MBA', min: 2000000, max: 2500000 },
      ],
    },
  };

  const data = universities[params.id as keyof typeof universities];

  if (!data) {
    return Response.json({ error: 'University not found' }, { status: 404 });
  }

  return Response.json(data);
}
