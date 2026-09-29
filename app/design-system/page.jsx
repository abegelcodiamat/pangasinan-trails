import Button from "../../components/atoms/Button";
import Typography from "../../components/atoms/Typography";
import Icon from "../../components/atoms/Icon";
import SiteImage from "../../components/atoms/SiteImage";
import HeritageCard from "../../components/molecules/HeritageCard";
import SearchForm from "../../components/molecules/SearchForm";
import NavigationItem from "../../components/molecules/NavigationItem";
import HeritageGrid from "../../components/organisms/HeritageGrid";
import HeaderNavigation from "../../components/organisms/HeaderNavigation";
import destinations from "../../data/destinations";

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-20 px-5 py-12 lg:px-8">
      {/* TITLE */}
      <section>
        <p className="text-sm font-bold uppercase tracking-widest text-teal-700">
          Component Library
        </p>

        <h1 className="mt-3 text-4xl font-black text-gray-900">
          Pangasinan Trails Design System
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          A reusable component library organized according
          to Brad Frost&apos;s Atomic Design methodology.
        </p>
      </section>

      {/* ATOMS */}
      <section>
        <div className="border-b border-gray-200 pb-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Level 01
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Atoms
          </h2>
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <h3 className="text-xl font-bold">
            Button
          </h3>

          <div className="mt-4 flex flex-wrap gap-3 rounded-2xl bg-white p-6 shadow-sm">
            <Button>Primary Button</Button>

            <Button variant="secondary">
              Secondary Button
            </Button>

            <Button variant="outline">
              Outline Button
            </Button>
          </div>
        </div>

        {/* TYPOGRAPHY */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Typography
          </h3>

          <div className="mt-4 space-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <Typography
              as="h1"
              className="text-4xl font-black"
            >
              Heading One
            </Typography>

            <Typography
              as="h2"
              className="text-2xl font-bold"
            >
              Heading Two
            </Typography>

            <Typography className="text-gray-600">
              Body text used for destination descriptions
              and supporting information.
            </Typography>
          </div>
        </div>

        {/* COLORS */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Color Tokens
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <div className="h-20 rounded-xl bg-teal-700" />
              <p className="mt-2 text-sm font-semibold">
                Primary
              </p>
              <p className="text-xs text-gray-500">
                #0F766E
              </p>
            </div>

            <div>
              <div className="h-20 rounded-xl bg-teal-950" />
              <p className="mt-2 text-sm font-semibold">
                Primary Dark
              </p>
              <p className="text-xs text-gray-500">
                #115E59
              </p>
            </div>

            <div>
              <div className="h-20 rounded-xl bg-amber-500" />
              <p className="mt-2 text-sm font-semibold">
                Secondary
              </p>
              <p className="text-xs text-gray-500">
                #F59E0B
              </p>
            </div>

            <div>
              <div className="h-20 rounded-xl bg-gray-900" />
              <p className="mt-2 text-sm font-semibold">
                Text
              </p>
              <p className="text-xs text-gray-500">
                #1F2937
              </p>
            </div>
          </div>
        </div>

        {/* ICON */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Icon
          </h3>

          <div className="mt-4 flex gap-8 rounded-2xl bg-white p-6 shadow-sm">
            <Icon name="search" size={28} />
            <Icon name="menu" size={28} />
            <Icon name="location" size={28} />
            <Icon name="arrow" size={28} />
            <Icon name="compass" size={28} />
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Image
          </h3>

          <div className="mt-4 max-w-md overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
            <SiteImage
              src="/images/hundred-islands.jpg"
              alt="Hundred Islands"
              width={900}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* MOLECULES */}
      <section>
        <div className="border-b border-gray-200 pb-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Level 02
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Molecules
          </h2>
        </div>

        {/* HERITAGE CARD */}
        <div className="mt-8">
          <h3 className="text-xl font-bold">
            Heritage Card
          </h3>

          <div className="mt-4 max-w-sm">
            <HeritageCard
              destination={destinations[0]}
            />
          </div>
        </div>

        {/* SEARCH FORM */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Search Form
          </h3>

          <div className="mt-4">
            <SearchForm />
          </div>
        </div>

        {/* NAVIGATION ITEM */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">
            Navigation Item
          </h3>

          <div className="mt-4 flex gap-6 rounded-2xl bg-white p-6 shadow-sm">
            <NavigationItem href="/">
              Home
            </NavigationItem>

            <NavigationItem href="/explore">
              Explore
            </NavigationItem>

            <NavigationItem href="/about">
              About
            </NavigationItem>
          </div>
        </div>
      </section>

      {/* ORGANISMS */}
      <section>
        <div className="border-b border-gray-200 pb-4">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Level 03
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Organisms
          </h2>
        </div>

        {/* HEADER */}
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold">
            Header Navigation
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <HeaderNavigation />
          </div>
        </div>

        {/* GRID */}
        <div className="mt-10">
          <h3 className="mb-4 text-xl font-bold">
            Heritage Grid
          </h3>

          <HeritageGrid
            destinations={destinations.slice(0, 3)}
          />
        </div>
      </section>
    </main>
  );
}