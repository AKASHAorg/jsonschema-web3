import { expect } from 'chai';
import {Buffer} from 'safe-buffer';
import Validator from './index';

describe('Validator', function () {

    it('validates ethereum address', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                ethAddr: {type: 'string', format: 'address'}
            }
        };
        const v = new Validator();
        expect(
            () =>
            v.validate(
                {ethAddr: '0x564286362092d9e7936f0549571a803b203aaced'},
                testSchema, { throwError: true }
                )
        )
            .to
            .not
            .throw();
    });

    it('throws when not expected ethereum address', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                ethAddr: {type: 'string', format: 'address'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {ethAddr: '0x56428362092d9e7936f0549571a803b203aaced'},
                    testSchema, { throwError: true }
                )
        )
            .to
            .throw();
    });

    it('validates checksummed ethereum address', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                ethAddr: {type: 'string', format: 'checkSummedAddress'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {ethAddr: '0xAf7D71DEdB1160B004C1D72884682C99d99f9cEE'},
                    testSchema, { throwError: true }
                )
        )
            .to
            .not
            .throw();
    });

    it('throws when not expected checksummed ethereum address', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                ethAddr: {type: 'string', format: 'checkSummedAddress'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {ethAddr: '0xAf7D71DEdB1160B004C1D72884682C99d99f9cE1'},
                    testSchema, { throwError: true }
                )
        )
            .to
            .throw();
    });


    it('validates ipfs multihash', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                ipfsHash: {type: 'string', format: 'multihash'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {ipfsHash: 'QmVrGUNU7QphE3op8M6EnZBdA41CziV37wVwgYcVHu3ukm'},
                    testSchema, { throwError: true }
                )
        )
            .to
            .not
            .throw();
    });

    it('throws when not expected ipfs multihash format', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                ipfsHash: {type: 'string', format: 'multihash'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {ipfsHash: 'Q1VrGUNU7QphE3op8M6EnZBdA41CziV37wVwgYcVHu3ukm'},
                    testSchema, { throwError: true }
                )
        )
            .to
            .throw();
    });

    it('validates buffer instance', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                buff: {type: 'any', format: 'buffer'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {buff: Buffer.from('QmVrGUNU7QphE3op8M6EnZBdA41CziV37wVwgYcVHu3ukm')},
                    testSchema, { throwError: true }
                )
        )
            .to
            .not
            .throw();
    });

    it('throws when not expected buffer format', function () {
        const testSchema = {
            id: '/testSchema',
            type: 'object',
            properties: {
                buff: {type: 'any', format: 'buffer'}
            }
        };
        const v = new Validator();
        expect(
            () =>
                v.validate(
                    {buff: 'QmVrGUNU7QphE3op8M6EnZBdA41CziV37wVwgYcVHu3ukm'},
                    testSchema, { throwError: true }
                )
        )
            .to
            .throw();
    });
});