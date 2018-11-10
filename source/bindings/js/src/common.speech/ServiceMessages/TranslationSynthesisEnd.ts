//
// Copyright (c) Microsoft. All rights reserved.
// See https://aka.ms/csspeech/license201809 for the full license information.
//

import { SynthesisStatus } from "../Exports";

// translation.synthesis.end
export interface ITranslationSynthesisEnd {
    SynthesisStatus: SynthesisStatus;
    FailureReason: string;
}

export class TranslationSynthesisEnd implements ITranslationSynthesisEnd {
    private obj: ITranslationSynthesisEnd;

    private constructor(json: string) {
        this.obj = JSON.parse(json);
        this.obj.SynthesisStatus = (SynthesisStatus as any)[this.obj.SynthesisStatus];
    }

    public static FromJSON(json: string): TranslationSynthesisEnd {
        return new TranslationSynthesisEnd(json);
    }

    public get SynthesisStatus(): SynthesisStatus {
        return this.obj.SynthesisStatus;
    }

    public get FailureReason(): string {
        return this.obj.FailureReason;
    }
}