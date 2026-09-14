import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'web-app';

// Toasts live inside a fixed viewport. For a preview card we keep the provider
// (Radix requires it) but let the viewport flow in place so the toast is visible
// inside the card rather than pinned to the window.
const Stage = ({ children }) => (
  <ToastProvider duration={Infinity}>
    <ToastViewport className="static w-full max-w-md p-0">{children}</ToastViewport>
  </ToastProvider>
);

export const Default = () => (
  <Stage>
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Message sent</ToastTitle>
        <ToastDescription>I usually reply within a day.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  </Stage>
);

export const Destructive = () => (
  <Stage>
    <Toast variant="destructive">
      <div className="grid gap-1">
        <ToastTitle>Upload failed</ToastTitle>
        <ToastDescription>The SCORM package was larger than 25 MB.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  </Stage>
);

export const WithAction = () => (
  <Stage>
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Draft saved</ToastTitle>
        <ToastDescription>Module 3 was saved two minutes ago.</ToastDescription>
      </div>
      <ToastAction altText="Undo the save">Undo</ToastAction>
      <ToastClose />
    </Toast>
  </Stage>
);

export const TitleOnly = () => (
  <Stage>
    <Toast>
      <ToastTitle>Copied to clipboard</ToastTitle>
      <ToastClose />
    </Toast>
  </Stage>
);
