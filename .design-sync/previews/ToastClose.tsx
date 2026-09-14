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

// The close control is transparent until the toast is hovered or focused, so
// these cells force it visible to show where it sits.
export const Revealed = () => (
  <Stage>
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Message sent</ToastTitle>
        <ToastDescription>Hover a real toast to reveal this control.</ToastDescription>
      </div>
      <ToastClose className="opacity-100" />
    </Toast>
  </Stage>
);

export const OnDestructive = () => (
  <Stage>
    <Toast variant="destructive">
      <div className="grid gap-1">
        <ToastTitle>Export failed</ToastTitle>
        <ToastDescription>The close control lightens on the destructive surface.</ToastDescription>
      </div>
      <ToastClose className="opacity-100" />
    </Toast>
  </Stage>
);
