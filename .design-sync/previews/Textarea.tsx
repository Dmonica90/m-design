import { Button, Textarea } from 'web-app';

export const Default = () => (
  <div className="max-w-md">
    <Textarea placeholder="Tell me about your project" aria-label="Message" />
  </div>
);

export const WithLabelAndHint = () => (
  <div className="max-w-md space-y-2">
    <label htmlFor="brief" className="text-sm font-medium text-foreground">
      Project brief
    </label>
    <Textarea
      id="brief"
      rows={5}
      defaultValue={
        'We need a 20-minute compliance refresher for 400 warehouse staff, in Spanish and English, delivered as SCORM 1.2.'
      }
    />
    <p className="text-sm text-muted-foreground">
      A paragraph is plenty — I will follow up with questions.
    </p>
  </div>
);

export const States = () => (
  <div className="max-w-md space-y-3">
    <Textarea placeholder="Enabled" aria-label="Enabled" />
    <Textarea placeholder="Disabled" disabled aria-label="Disabled" />
  </div>
);

export const InAForm = () => (
  <div className="max-w-md space-y-4">
    <Textarea rows={4} placeholder="What would you like to build?" aria-label="Message" />
    <div className="flex justify-end gap-3">
      <Button variant="ghost">Cancel</Button>
      <Button>Send message</Button>
    </div>
  </div>
);
