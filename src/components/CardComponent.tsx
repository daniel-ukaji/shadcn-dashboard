import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter, // Note: You imported CardFooter but didn't use it. Consider removing if unnecessary.
    CardHeader,
    CardTitle,
} from "./ui/card";
import Link from 'next/link';

const CardComponent: React.FC = () => {
  return (
    <div className='max-w-3xl mx-auto mt-5 flex space-x-3 justify-center'>
                <Card className="w-[210px]">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>A crowd sourced link for making spaces</p>
                    </CardContent>
                </Card>

        <Card className="w-[210px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>A crowd sourced link for making spaces</p>
            </CardContent>
        </Card>

        <Card className="w-[210px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>A crowd sourced link for making spaces</p>
            </CardContent>
        </Card>
    </div>
  );
}

export default CardComponent;
