# Granboard Funmade Application

This application is published as Open Source Software.

**Please feel free to merge your applications !!**
**Welcome to App requests, Enhancements, and so on !!!!**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Application image

![image01](/readme-blob/image01.png)
![image02](/readme-blob/image02.png)
![image03](/readme-blob/image03.png)

## Getting Started

### Run locally

First, run the development server:

```bash
yarn install  # install dependencies
yarn run dev  # run server as http://localhost:3000
```

Access [http://localhost:3000](http://localhost:3000)

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting Started to Development

### Connect to Granboard with callback

refs: [DaDartboad](https://github.com/CJPrez/DaDartboard)

1. connect to granboard

```js
const granboard = await Granboard.ConnectToBoard();
```

2. bind callback

```js
const onSegmentHit = useCallback((segment: Segment) => {
  console.log(segment);
});

granboard.segmentHitCallback = onSegmentHit;
```

### Drawing Dartsboard

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
