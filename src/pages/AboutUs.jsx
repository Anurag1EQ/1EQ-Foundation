import React from "react";
import { Heart, Users, Target, BookOpen, Lightbulb, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{ backgroundColor: "#00254e" }}
      >
        <div className="mx-auto w-[90%] global-width">
          <h1 className="text-5xl font-bold mb-6">About 1EQ Foundation</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Empowering lives through equitable, accessible, and inclusive
            education for all
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 global-width w-[90%]">
        <div className="mx-auto w-[90%] global-width">
          <h2 className="text-4xl font-bold mb-8" style={{ color: "#00254e" }}>
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl">
            1EQ Foundation is dedicated to providing education in an equitable,
            accessible, and inclusive manner amongst persons with disabilities
            and students with dyslexia through tailored assistance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            We promote education amongst the socially and economically
            disadvantaged and other marginalised communities in India through
            innovative programs and technology in partnership and collaboration
            with similar responsive organisations and institutions.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50 ">
        <div className="mx-auto w-[90%] global-width">
          <h2 className="text-4xl font-bold mb-8" style={{ color: "#00254e" }}>
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            A future where every individual, regardless of their background or
            abilities, has equal access to quality education and opportunities
            to reach their full potential.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 ">
        <div className="mx-auto w-[90%] global-width">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "#00254e" }}>
            Our Core Values
          </h2>

          <div className="mb-10">
            <div className="flex items-start mb-4">
              <Heart
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Inclusivity
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe in creating an environment where everyone feels
                  welcomed, valued, and supported regardless of their abilities
                  or background.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-start mb-4">
              <Users
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Equity
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We strive to provide fair and just opportunities to all
                  learners, ensuring that everyone has access to the resources
                  they need to succeed.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-4">
              <Lightbulb
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Innovation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We embrace technology and creative solutions to break down
                  barriers and make education accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50 ">
        <div className="mx-auto w-[90%] global-width">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "#00254e" }}>
            What We Do
          </h2>

          <div className="mb-10">
            <div className="flex items-start mb-4">
              <BookOpen
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Tailored Educational Support
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide specialized assistance and learning programs
                  designed specifically for persons with disabilities and
                  students with dyslexia, ensuring their unique learning needs
                  are met with care and expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-start mb-4">
              <Users
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Community Empowerment
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We work with socially and economically disadvantaged
                  communities across India, providing access to education and
                  resources that enable personal and community growth.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-start mb-4">
              <Lightbulb
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Technology-Driven Solutions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We leverage innovative technology and digital tools to create
                  accessible learning platforms that reach learners wherever
                  they are, breaking geographical and physical barriers.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-4">
              <Award
                className="w-8 h-8 mt-1 mr-4 flex-shrink-0"
                style={{ color: "#00254e" }}
              />
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "#00254e" }}
                >
                  Strategic Partnerships
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We collaborate with responsive organizations and institutions
                  that share our vision, amplifying our impact and creating a
                  broader network of support for those we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 ">
        <div className="mx-auto w-[90%] global-width">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "#00254e" }}>
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#00254e" }}
              >
                1000+
              </div>
              <div className="text-xl text-gray-700">Students Supported</div>
            </div>
            <div>
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#00254e" }}
              >
                50+
              </div>
              <div className="text-xl text-gray-700">Partner Organizations</div>
            </div>
            <div>
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#00254e" }}
              >
                100%
              </div>
              <div className="text-xl text-gray-700">
                Commitment to Inclusion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gray-50 ">
        <div className="mx-auto text-center w-[90%] global-width">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#00254e" }}>
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Together, we can create a more inclusive and equitable educational
            landscape for all. Partner with us, volunteer, or support our
            mission today.
          </p>
          <button
            className="text-white font-semibold px-8 py-3 rounded text-lg transition-opacity"
            style={{ backgroundColor: "#00254e" }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
