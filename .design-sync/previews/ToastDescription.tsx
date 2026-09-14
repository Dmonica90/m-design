import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'web-app';

const Stage = ({ children }) => (
  <ToastProvider duration={Infinity}>
    <ToastViewport className="static w-full max-w-md p-0">{children}</ToastViewport>
  </ToastProvider>
);

export const UnderATitle = () => (
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

export const LongerDetail = () => (
  <Stage>
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Package uploaded</ToastTitle>
        <ToastDescription>
          The SCORM 1.2 build is on the LMS and ready for a smoke test on
          Chrome, Safari and the mobile app.
        </ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  </Stage>
);

export const OnDestructive = () => (
  <Stage>
    <Toast variant="destructive">
      <div className="grid gap-1">
        <ToastTitle>Upload failed</ToastTitle>
        <ToastDescription>Check the file size and try again.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  </Stage>
);
