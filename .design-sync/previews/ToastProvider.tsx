import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from 'web-app';

// ToastProvider renders no markup of its own — it supplies the context every
// other toast part reads. These cells show the full composition it enables.
export const FullComposition = () => (
  <ToastProvider duration={Infinity}>
    <ToastViewport className="static w-full max-w-md p-0">
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Message sent</ToastTitle>
          <ToastDescription>
            Provider, viewport and toast — the three pieces every notification needs.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </ToastViewport>
  </ToastProvider>
);

export const WithSharedDuration = () => (
  <ToastProvider duration={10000}>
    <ToastViewport className="static w-full max-w-md p-0">
      <Toast>
        <div className="grid gap-1">
          <ToastTitle>Ten second default</ToastTitle>
          <ToastDescription>
            The provider's duration prop sets the default for every toast inside it.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
    </ToastViewport>
  </ToastProvider>
);
