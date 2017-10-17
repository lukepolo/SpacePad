<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <slot></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn" @click="$emit('close')">
                                Cancel
                            </button>
                            <button class="btn btn-danger" @click="$emit('confirm')">
                                Confirm
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {

    }
</script>