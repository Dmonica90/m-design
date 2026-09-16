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

export const WithDescription = () => (
  <Stage>
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Course published</ToastTitle>
        <ToastDescription>Learners can start it from the catalogue now.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  </Stage>
);

export const Alone = () => (
  <Stage>
    <Toast>
      <ToastTitle>Link copied</ToastTitle>
      <ToastClose />
    </Toast>
  </Stage>
);

export const OnDestructive = () => (
  <Stage>
    <Toast variant="destructive">
      <div className="grid gap-1">
        <ToastTitle>Export failed</ToastTitle>
        <ToastDescription>The title inherits the destructive foreground.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  </Stage>
);
