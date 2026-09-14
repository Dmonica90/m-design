import { Card, CardContent, CardHeader, CardTitle, SectionWrapper } from 'web-app';

export const Numbered = () => (
  <SectionWrapper
    id="services"
    number="02"
    eyebrow="Qué hago"
    title={<>Interactive learning, <span className="text-secondary">end to end.</span></>}
    subtitle="From the first storyboard to the SCORM package."
  >
    <div className="grid sm:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Instructional design</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Turning dense compliance material into something worth finishing.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Interactive build</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Storyline, JavaScript and web builds that behave like small games.
          </p>
        </CardContent>
      </Card>
    </div>
  </SectionWrapper>
);

export const TitleOnly = () => (
  <SectionWrapper id="projects" title="Selected work">
    <p className="text-center text-muted-foreground">
      A subtitle is optional — the title block centres either way.
    </p>
  </SectionWrapper>
);

export const Untitled = () => (
  <SectionWrapper id="intro">
    <div className="bg-muted rounded-lg p-8 text-center">
      <p className="text-muted-foreground">
        With no title, the section is pure vertical rhythm plus the page gutter.
      </p>
    </div>
  </SectionWrapper>
);
