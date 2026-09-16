import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'web-app';

// In an app the viewport is fixed to the corner of the window. These cells let
// it flow in place so the stacking behaviour is visible inside the card.
export const StackedToasts = () => (
  <ToastProvider duration={Infinity}>
    <ToastViewport className="static w-full max-w-md p-0 gap-3">
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Draft saved</ToastTitle>
          <ToastDescription>Module 3, two minutes ago.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="destructive">
        <div className="grid gap-1">
          <ToastTitle>Upload failed</ToastTitle>
          <ToastDescription>The package exceeded 25 MB.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </ToastViewport>
  </ToastProvider>
);

export const SingleToast = () => (
  <ToastProvider duration={Infinity}>
    <ToastViewport className="static w-full max-w-md p-0">
      <Toast>
        <ToastTitle>Copied to clipboard</ToastTitle>
        <ToastClose />
      </Toast>
    </ToastViewport>
  </ToastProvider>
);
