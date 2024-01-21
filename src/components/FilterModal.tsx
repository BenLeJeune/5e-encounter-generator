import React, {useContext} from 'react';
import {MONSTER_ENVIRONMENTS, MONSTER_TAGS, MONSTER_TYPES, StringTypeDict} from "../types";
import {capitalise} from "../helpers/misc_helpers";
import Select from 'react-select'
import {FiltersContext} from "../context/FiltersContext";

type FilterModal_Props = {

}

const toSelectOptions = (opts: string[]) => opts ? opts.reduce((p, n) => [
    ...p, {
        value: n,
        label: capitalise(n)
    }
], [] as {value:string, label:string}[]) : undefined

const type_options = toSelectOptions(MONSTER_TYPES)

export default function FilterModal(props: FilterModal_Props) {

    return  <div className="modal modal-lg fade" id="filterModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Filter the Bestiary</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row mb-4">
                        <h6>Filter by Type</h6>
                        <FiltersMultiSelect key={'types'} options={MONSTER_TYPES}/>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <h6>Filter by Tag</h6>
                            <FiltersMultiSelect key={'tags'} options={MONSTER_TAGS}/>
                        </div>
                        <div className="col">
                            <h6>Filter by Environment</h6>
                            <FiltersMultiSelect key={'envs'} options={MONSTER_ENVIRONMENTS}/>
                        </div>
                    </div>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-muted" htmlFor="flexSwitchCheckDefault">
                            Apply to Encounter Generator as well as bestiary
                        </label>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger">Reset</button>
                    <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Save</button>
                </div>
            </div>
        </div>
    </div>
}

type MultiSelectProps = {
    key: 'types' | 'tags' | 'envs',
    options: string[]
}
function FiltersMultiSelect({key, options}: MultiSelectProps) {

    const [filters, setFilters] = useContext(FiltersContext)

    return <Select
        defaultValue={toSelectOptions(filters[key])}
        onChange={new_types => setFilters(prev => {
            return {
                ...prev,
                [key]: new_types.map(obj => obj.value)
            }
        })}
        options={toSelectOptions(options)} isMulti
        classNames={{
            control: state => 'bg-body border border-secondary py-1',
            input: state => 'text-secondary',
            option: state => state.isFocused ? 'bg-light' : 'bg-body',
            menu: state => 'bg-body overflow-hidden border border-secondary',
            multiValue: state => 'bg-primary',
            multiValueLabel: state => 'text-white fs-6',
            multiValueRemove: state => 'mv-remove-colours text-white',
            container: state => 'mx-0'
        }}
        styles={{
            option: (base, state) => {
                return !state.isFocused ? base : {
                    ...base, ['--bs-bg-opacity']: '.1'
                }
            }
        }}
    />
}