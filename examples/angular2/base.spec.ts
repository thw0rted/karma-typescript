import "core-js"
import "zone.js";
import "zone.js/bundles/long-stack-trace-zone.umd";
import "zone.js/bundles/proxy.umd";
import "zone.js/bundles/sync-test.umd";
import "zone.js/bundles/jasmine-patch.umd";
import "zone.js/bundles/async-test.umd";
import "zone.js/bundles/fake-async-test.umd";

import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
