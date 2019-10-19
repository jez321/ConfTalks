import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import { Container, Section, ContentWrapper, Hero } from "../components/layout";
import { NewsletterForm } from "../components/forms/Newsletter";
import Head from "next/head";
import { EmailOctopus } from "../components/forms/EmailOctopus";
import { NewsletterSection } from "../components/forms";

const HeadTags = () => (
  <Head>
    <title>ConfTalks.org</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const Contributing = () => {
  return (
    <Fragment>
      <HeadTags />
      <header>
        <Nav />
      </header>
      <main>
        <Container>
          <Section>
            <h1>Contributing</h1>
            <p>
              Thank you for contributing! This project wouldn't work without
              people like you :) <br />
              <br />
              See our{" "}
              <a href="https://github.com/EddyVinck/ConfTalks/blob/master/CONTRIBUTING.md">
                Contributing Guidelines
              </a>{" "}
              on GitHub.
            </p>
            <p>
              Talk with other contributors and conference enthusiasts in our{" "}
              <a
                href="https://join.slack.com/t/conftalks/shared_invite/enQtNzk1MjA1ODQ2NzM3LTRkMmU0YmRhZDEzYmUxZTEyYjhlMWYzOWIyYTU0NDBkMGFlN2U3MjJmNWE5MjM4ZDM1Yzg0M2QwZWUzODllMzM"
                target="_blank"
              >
                community Slack!
              </a>
            </p>
          </Section>
        </Container>
        <NewsletterSection />
      </main>
    </Fragment>
  );
};

export default Contributing;
