import Card from './components/Card';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* section one */}
      <div className='py-12'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold md:text-6xl'>
              How Compare Banks Works
            </h1>
            <p className='py-2 text-base md:text-lg'>
              Simplify your bank package comparisons effortlessly with Compare
              Banks
            </p>
          </div>
          <div className='flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-evenly md:space-y-6 lg:gap-2'>
            <Card
              index={1}
              title='Select Your Package'
              description='Choose multiple banks to compare their packages side-by-side with ease.'
            />
            <Card
              index={2}
              title='Compare Features'
              description='Evaluate monthly fees, interest rates, and additional charges with
              clear comparisons.'
            />
            <Card
              index={3}
              title='Filter Your Options'
              description='Evaluate monthly fees, interest rates, and additional charges with
              clear comparisons.'
            />
            <Card
              index={4}
              title='Make Informed Decisions'
              description='Empower yourself with essential information to choose the best
              bank package for your needs.
'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
