'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredCourses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development from scratch',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    price: 99.99,
    category: 'Development',
    instructor: 'John Doe',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Digital Marketing Masterclass',
    description: 'Master modern digital marketing strategies',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    price: 89.99,
    category: 'Marketing',
    instructor: 'Jane Smith',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Create beautiful and functional user interfaces',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    price: 79.99,
    category: 'Design',
    instructor: 'Mike Johnson',
    rating: 4.9,
  },
];

export function FeaturedCourses() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredCourses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-video relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <Badge>{course.category}</Badge>
              <span className="text-sm text-muted-foreground">⭐ {course.rating}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Instructor: {course.instructor}
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-6 pt-0">
            <span className="text-xl font-bold">${course.price}</span>
            <Link
              href={`/courses/${course.id}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}