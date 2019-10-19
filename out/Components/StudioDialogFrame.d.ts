/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types/plugin" />
/// <reference types="@rbxts/roact" />
import Roact from "@rbxts/roact";
import { Signal } from "@rbxts/roblox-SignalsTooling";
declare const _default: {
    new (pluginReference: Plugin, name: string, title: string, size: Vector2, dockWidgetPluginGuiId?: string | undefined): {
        _DockWidgetPluginGui: DockWidgetPluginGui;
        _Handle?: Roact.ComponentInstanceHandle | undefined;
        readonly Opened: Signal<[]>;
        readonly Closed: Signal<[]>;
        /**
         * Closes the dialog frame.
         */
        Close(): void;
        /**
         * Destroys the dialog frame.
         */
        Destroy(): void;
        /**
         * Opens the dialog frame.
         */
        Open(): void;
        SetContents(contents: Roact.Element): void;
    };
};
/**
 * Controls a dialog frame
 */
export = _default;
