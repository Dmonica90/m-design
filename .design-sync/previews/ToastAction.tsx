import {
  Toast,
  ToastAction,
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

export const Undo = () => (
  <Stage>
    <Toast>
      <div className="grid gap-1">
        <ToastTitle>Draft deleted</ToastTitle>
        <ToastDescription>Module 3 was moved to the bin.</ToastDescription>
      </div>
      <ToastAction altText="Restore the deleted draft">Undo</ToastAction>
      <ToastClose />
    </Toast>
  </Stage>
);

export const Retry = () => (
  <Stage>
    <Toast variant="destructive">
      <div className="grid gap-1">
        <ToastTitle>Upload failed</ToastTitle>
        <ToastDescription>The connection dropped partway through.</ToastDescription>
      </div>
      <ToastAction altText="Retry the upload">Retry</ToastAction>
      <ToastClose />
    </Toast>
  </Stage>
);
