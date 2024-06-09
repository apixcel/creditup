"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The AI documents created by Creditup helped me get payment arrangements in place which left me with more money at the end of each month. I was also able to claim back £3000 in total from unfair lending. ",
    name: "Jack Cooper",
    title: "London",
    img: "/img/client/client1.png",
  },
  {
    quote:
      "Amazing platform! Helped me reduce my creditor repayments and improve my credit score through their AI factor tips. ",
    name: "Natasha Patel",
    title: "Edinburgh",
    img: "/img/client/client2.png",
  },
  {
    quote:
      "I was getting chased by so many creditors, using Creditup, I was able to not only pay an affordable monthly rate, but it was such a huge stress relief on my behalf, improving my quality if life. I am one very happy customer. ",
    name: "Vicky Winston",
    title: "Cardiff",
    img: "/img/client/client3.png",
  },
  {
    quote:
      "I was getting chased by so many creditors, using Creditup, I was able to not only pay an affordable monthly rate, but it was such a huge stress relief on my behalf, improving my quality if life. I am one very happy customer.",
    name: "Jeff Quigley",
    title: "Belfast",
  },
  {
    quote:
      "Glad I found credit up and decided to go with them! Great service and feeling confident in the end result!",
    name: "Francis McKenna",
    title: "Blackpool",
    img: "/img/client/client1.png",
  },
  {
    quote:
      "I was in trouble with debt, creditup have helped me with this and I’m now more comfortable with my finances. Credit up has helped both my debt and mental health. Thank you! ",
    name: "Susan Stanley",
    title: "Leeds",
    img: "/img/client/client2.png",
  },
  {
    quote:
      "Amazing service! Once I signed up a paralegal called me and helped me with the set up. No judgment at all and very thorough.",
    name: "Rickell Gibb",
    title: "Plymouth",
    img: "/img/client/client3.png",
  },
  {
    quote:
      "Very helpful, having a paralegal on speed dial whenever I needed help or questions answered was truly refreshing. ",
    name: "Violet Fenton",
    title: "Kent",
    img: "/img/client/client2.png",
  },
  {
    quote:
      "So happy with my experience with creditup so far. They made my experience so easy and I couldn't recommend them enough.",
    name: "Emma Watson",
    title: "Chichester",
    img: "/img/client/client3.png",
  },
  {
    quote:
      "Credit up has been brilliant so far. They've answered every question I've had with a quick response. Ibwoukd highly recommend.",
    name: "Jamie Cosmore",
    title: "Manchester",
    img: "/img/client/client1.png",
  },
];