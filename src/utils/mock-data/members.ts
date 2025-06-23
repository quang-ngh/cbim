// Mock data for research team members
export interface Person {
  id: number;
  name: string;
  personalPageUrl: string;
  position: 'Faculty' | 'PhD Students' | 'MS Students' | 'Alumni';
  enrollYear: number;
  profileImage: string;
  interest: string;
}

export const mockPeople: Person[] = [
  // Faculty
  {
    "id": 1,
    "name": 'Professor Dimitris Metaxas',
    "personalPageUrl": 'https://cs.university.edu/~schen',
    "position": 'Faculty',
    "enrollYear": 2001,
    "profileImage": 'https://deeplearn.irdta.eu/2022su/wp-content/uploads/sites/4/2021/10/Dimitris-N.-Metaxas.jpg',
    "interest": ''
  },

  // {
  //   id: '2',
  //   name: 'Prof. Michael Rodriguez',
  //   personalPageUrl: 'https://cs.university.edu/~mrodriguez',
  //   position: 'Faculty',
  //   enrollYear: 2012,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '3',
  //   name: 'Dr. Emily Watson',
  //   personalPageUrl: 'https://cs.university.edu/~ewatson',
  //   position: 'Faculty',
  //   enrollYear: 2018,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },

  // Postdoctoral Research Associate
  // {
  //   id: '4',
  //   name: 'Dr. Ahmed Hassan',
  //   personalPageUrl: 'https://cs.university.edu/~ahassan',
  //   position: 'Postdoctoral Research Associate',
  //   enrollYear: 2023,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '5',
  //   name: 'Dr. Lisa Park',
  //   personalPageUrl: 'https://cs.university.edu/~lpark',
  //   position: 'Postdoctoral Research Associate',
  //   enrollYear: 2024,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },

  // PhD Students
  // Import the JSON data
  {
    "name": "Wenyi Mo",
    "interest": "Diffusion Models, Generative Models, Multimodal, MLLM",
    "profileImage": "/images/members/Wenyi_Mo.jpg",
    "id": 6,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Yanting Yang",
    "interest": "Embodied AI, LLM, Multimodal",
    "profileImage": "/images/members/Yanting_Yang.jpg",
    "id": 7,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Quyen Tran",
    "interest": "Generative Models",
    "profileImage": "/images/members/Quyen_Tran.jpg",
    "id": 8,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"

  },
  {
    "name": "Quang Nguyen",
    "interest": "Diffusion Models, Multimodal, Generative Models",
    "profileImage": "/images/members/Quang_Nguyen.jpg",
    "id": 9,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"

  },
  {
    "name": "Quan Dao",
    "interest": "Diffusion Models, Generative Models",
    "profileImage": "/images/members/Quan_Dao.jpg",
    "id": 10,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Di Liu",
    "interest": "Computer Vision, Vision-language Models, LLMs, Computer Graphics",
    "profileImage": "/images/members/Di_Liu.jpg",
    "id": 11,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Yang Zhou",
    "interest": "MLLM, VLM, LLM",
    "profileImage": "/images/members/Yang_Zhou.jpg",
    "id": 12,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  }, 
  {
    "name": "Song Wen",
    "interest": "Generative Models, Diffusion Models",
    "profileImage": "/images/members/Song_Wen.jpg",
    "id": 13,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Ligong Han",
    "interest": "Diffusion Models, Generative Models, LLM",
    "profileImage": "/images/members/Ligong_Han.jpg",
    "id": 14,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Zhuowei Li",
    "interest": "Multimodal, LLM, Continual Learning",
    "profileImage": "/images/members/Zhuowei_Li.jpg",
    "id": 15,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Shiyu Zhao",
    "interest": "Multimodal LLM, Open Vocabulary Object Detection, Optical Flow Estimation",
    "profileImage": "/images/members/Shiyu_Zhao.jpg",
    "id": 16,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Can Jin",
    "interest": "Reinforcement Learning, Efficiency",
    "profileImage": "/images/members/Can_Jin.jpg",
    "id": 17,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Meng Ye",
    "interest": "AI for healthcare",
    "profileImage": "/images/members/Meng_Ye.jpg",
    "id": 18,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Difei Gu",
    "interest": "Multimodal Reasoning",
    "profileImage": "/images/members/Difei_Gu.jpg",
    "id": 19,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Zhanfu Yang",
    "interest": "3D, LLM, Generative Models",
    "profileImage": "/images/members/Zhanfu_Yang.jpg",
    "id": 20,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  },
  {
    "name": "Mingyu Zhao",
    "interest": "Multimodal, LLM",
    "profileImage": "/images/members/Mingyu_Zhao.jpg",
    "id": 21,
    "personalPageUrl": "/",
    "enrollYear": 2024,
    "position": "PhD Students"
  }

  // MS Students
  // {
  //   id: '14',
  //   name: 'Ryan Murphy',
  //   personalPageUrl: 'https://cs.university.edu/~rmurphy',
  //   position: 'MS Students',
  //   enrollYear: 2023,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '15',
  //   name: 'Jessica Taylor',
  //   personalPageUrl: 'https://cs.university.edu/~jtaylor',
  //   position: 'MS Students',
  //   enrollYear: 2024,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '16',
  //   name: 'Carlos Mendez',
  //   personalPageUrl: 'https://cs.university.edu/~cmendez',
  //   position: 'MS Students',
  //   enrollYear: 2024,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '17',
  //   name: 'Amanda Johnson',
  //   personalPageUrl: 'https://cs.university.edu/~ajohnson',
  //   position: 'MS Students',
  //   enrollYear: 2023,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '18',
  //   name: 'Daniel Chang',
  //   personalPageUrl: 'https://cs.university.edu/~dchang',
  //   position: 'MS Students',
  //   enrollYear: 2024,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },

  // Alumni
  // {
  //   id: '19',
  //   name: 'Dr. Jennifer Lee',
  //   personalPageUrl: 'https://linkedin.com/in/jenniferlee',
  //   position: 'Alumni',
  //   enrollYear: 2015,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '20',
  //   name: 'Dr. Robert Wilson',
  //   personalPageUrl: 'https://linkedin.com/in/robertwilson',
  //   position: 'Alumni',
  //   enrollYear: 2016,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '21',
  //   name: 'Dr. Nina Patel',
  //   personalPageUrl: 'https://linkedin.com/in/ninapatel',
  //   position: 'Alumni',
  //   enrollYear: 2017,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '22',
  //   name: 'Mark Davis',
  //   personalPageUrl: 'https://linkedin.com/in/markdavis',
  //   position: 'Alumni',
  //   enrollYear: 2018,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '23',
  //   name: 'Dr. Priya Sharma',
  //   personalPageUrl: 'https://linkedin.com/in/priyasharma',
  //   position: 'Alumni',
  //   enrollYear: 2019,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // },
  // {
  //   id: '24',
  //   name: 'Alex Brown',
  //   personalPageUrl: 'https://linkedin.com/in/alexbrown',
  //   position: 'Alumni',
  //   enrollYear: 2020,
  //   profileImage: 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg'
  // }
];

// Helper function to group people by position
export const groupPeopleByPosition = (people: Person[]) => {
  const positionOrder: Person['position'][] = [
    'Faculty',
    // 'Postdoctoral Research Associate',
    'PhD Students',
    // 'MS/PhD Students',
    'MS Students',
    'Alumni'
  ];

  const grouped = people.reduce((acc, person) => {
    if (!acc[person.position]) {
      acc[person.position] = [];
    }
    acc[person.position].push(person);
    return acc;
  }, {} as Record<Person['position'], Person[]>);

  // Sort each group by enroll year (earliest first, except Alumni which should be latest first)
  Object.keys(grouped).forEach(position => {
    if (position === 'Alumni') {
      grouped[position as Person['position']].sort((a, b) => b.enrollYear - a.enrollYear);
    } else {
      grouped[position as Person['position']].sort((a, b) => a.enrollYear - b.enrollYear);
    }
  });

  return positionOrder.map(position => ({
    position,
    people: grouped[position] || []
  })).filter(group => group.people.length > 0);
};
